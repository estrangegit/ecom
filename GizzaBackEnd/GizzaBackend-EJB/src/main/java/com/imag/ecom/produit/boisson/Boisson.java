package com.imag.ecom.produit.boisson;

import java.io.Serializable;
import javax.persistence.*;

import com.imag.ecom.categorie.Categorie;
import com.imag.ecom.produit.Produit;

/**
 * Entity implementation class for Entity: Boisson
 *
 */
@Entity
@DiscriminatorValue("BOISSON")
public class Boisson extends Produit implements Serializable {

	private double quantite;
	private static final long serialVersionUID = 1L;

	public Boisson() {
		super();
	}

	
	public Boisson(String nom, double prix, String url, Categorie categorie,double quantite) {
		super(nom, prix, url, categorie);
		this.quantite=quantite;
	}


	public double getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

	

}
