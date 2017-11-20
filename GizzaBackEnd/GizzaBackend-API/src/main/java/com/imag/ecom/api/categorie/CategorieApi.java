package com.imag.ecom.api.categorie;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.imag.ecom.categorie.Categorie;
import com.imag.ecom.categorie.CategorieRepository;
import com.imag.ecom.security.Secured;
import com.imag.ecom.shared.CategoryType;
import com.imag.ecom.shared.Role;

@Path("/categorie")
@RequestScoped
public class CategorieApi {
	@Inject
	private CategorieRepository repository;

	@GET
	@Path("/get/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		Map<String, List<Categorie>> res = new HashMap<>();
		res.put("data", repository.findAll());
		return Response.ok(res, MediaType.APPLICATION_JSON_TYPE).build();
	}

	@GET
	@Path("/get/by/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Categorie getByID(@PathParam(value = "id") Long id) {
		return repository.find(id);
	}

	@GET
	@Path("/get/by/name/{nom}")
	@Produces(MediaType.APPLICATION_JSON)
	public Categorie getByName(@PathParam(value = "nom") String name) {
		return repository.getByName(name);
	}

	@POST
	@Secured({ Role.ADMIN })
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	public Categorie add(@FormParam(value = "type") String type, @FormParam(value = "libelle") String libelle) {
		Categorie c = new Categorie();
		c.setType(CategoryType.fromString(type));
		c.setLibelle(libelle);
		// c.addProduit(new Pizza());
		return repository.create(c);
	}

	@DELETE
	@Secured({ Role.ADMIN })
	@Path("/delete/{id}")
	public void delete(@PathParam(value = "id") Long id) {
		repository.remove(repository.find(id));
	}

	@PUT
	@Secured({ Role.ADMIN })
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Categorie update(Categorie p) {
		return repository.update(p);
	}

}
