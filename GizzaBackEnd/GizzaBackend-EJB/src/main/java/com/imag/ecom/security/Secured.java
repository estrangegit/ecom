package com.imag.ecom.security;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.ws.rs.NameBinding;

import com.imag.ecom.shared.Role;

/**
 *
 * @author Ardiansyah <ard333.ardiansyah@gmail.com>
 */
@NameBinding
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Secured {
	Role[] value() default {};
}
