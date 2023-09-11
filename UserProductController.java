package org.jspUserProduct.Controller;

import java.util.List;
import java.util.Scanner;

import org.jspUserProduct.SpringApp.UserProductConfig;
import org.jspUserProduct.dao.ProductDao;
import org.jspUserProduct.dao.UserDao;
import org.jspUserProduct.dto.Product;
import org.jspUserProduct.dto.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SuppressWarnings("resource")
public class UserProductController {
	static Scanner sc = new Scanner(System.in);
	private static UserDao userdao;
	private static ProductDao productdao;
	static {

		ApplicationContext context = new AnnotationConfigApplicationContext(UserProductConfig.class);
		userdao = context.getBean(UserDao.class);
		productdao = context.getBean(ProductDao.class);
	}

	public static void main(String[] args) {
		System.out.println("1. Save User");
		System.out.println("2. Update User");
		System.out.println("3. Add The Product");
		System.out.println("4. Verify User By Phone and Password");
		System.out.println("5. View Product By User_id");
		System.out.println("6. View Product By Brand");
		System.out.println("7. View Product By Category");
		switch (sc.nextInt()) {
		case 1: {
			SaveUser();
			break;
		}
		case 2: {
			UpdateUser();
			break;
		}
		case 3: {
			AddProduct();
			break;
		}
		case 4: {
			VerifyUserByPhoneAndPassword();
			break;
		}
		case 5: {
			ViewProductByUserId();
			break;
		}
		case 6: {
			ViewProductByBrand();
			break;
		}
		case 7: {
			ViewProductByCategory();
			break;
		}
		}

	}

// Save The User------------------------------------------------
	public static void SaveUser() {
		System.out.println("Enter The Name, Phone, Email, and Password");
		User u = new User();
		u.setName(sc.next());
		u.setPhone(sc.nextLong());
		u.setEmail(sc.next());
		u.setPassword(sc.next());
		u = userdao.SaveUser(u);
		System.out.println("Save The Record with Id " + u.getId());
	}

	// Update The User-------------------------------------------
	public static void UpdateUser() {
		System.out.println("Enter User Id To Update Record");
		int id = sc.nextInt();
		System.out.println("Enter The Name, Phone, Email, and Password To Update the Record");
		User u = new User();
		u.setId(id);
		u.setName(sc.next());
		u.setPhone(sc.nextLong());
		u.setEmail(sc.next());
		u.setPassword(sc.next());
		u = userdao.UpdateUser(u);
		System.out.println("Update The User With Id :- " + u.getId());
	}

//Add The Product-------------------------------------------------
	public static void AddProduct() {
		System.out.println("Enter User_id to Add The Record");
		int user_id = sc.nextInt();
		System.out.println("Enter The Product Name, Brand, Category, Description, Image, cost To Add The Product");
		Product p = new Product();
		p.setName(sc.next());
		p.setBrand(sc.next());
		p.setCategory(sc.next());
		p.setDescription(sc.next());
		p.setImage(sc.next());
		p.setCost(sc.nextDouble());
		p = productdao.SaveProduct(p, user_id);
		if (p != null) {
			System.out.println("Product Added With " + p.getId());
		} else
			System.out.println("You Have Enter The Invalid User Id");

	}

// Verify The User By Phone And Password--------------------------------
	public static void VerifyUserByPhoneAndPassword() {
		System.out.println("Enter The Phone And Password To Veryfy The User");
		long phone = sc.nextLong();
		String password = sc.next();
		User u = userdao.VerifyUser(phone, password);
		if (u != null) {
			System.out.println("User Name " + u.getName());
			System.out.println("User Phone " + u.getPhone());
			System.out.println("User Email " + u.getEmail());
			System.out.println("User Password " + u.getPassword());
		} else {
			System.out.println("You Have Enter Invlid Id");
		}
	}

	// View The User By Id---------------------------------------------------
	public static void ViewProductByUserId() {
		System.out.println("Enter Your User Id");
		int user_id = sc.nextInt();
		List<Product> prods = productdao.findProductByUserId(user_id);
		if (prods.size() > 0) {
			for (Product p : prods) {
				System.out.println("Id : " + p.getId());
				System.out.println("Name : " + p.getName());
				System.out.println("Brand : " + p.getBrand());
				System.out.println("Category : " + p.getCategory());
				System.out.println("Description : " + p.getDescription());
				System.out.println("Image : " + p.getImage());
				System.out.println("Cost : " + p.getCost());

			}
		} else {
			System.out.println("invalid userid");
		}
	}

	// View The User By Brands--------------------------------------------
	public static void ViewProductByBrand() {
		System.out.println("Enter Your Brand");
		String brand = sc.next();
		List<Product> prods = productdao.findProductByBrand(brand);
		if (prods.size() > 0) {
			for (Product p : prods) {
				System.out.println("Id : " + p.getId());
				System.out.println("Name : " + p.getName());
				System.out.println("Brand : " + p.getBrand());
				System.out.println("Category : " + p.getCategory());
				System.out.println("Description : " + p.getDescription());
				System.out.println("Image : " + p.getImage());
				System.out.println("Cost : " + p.getCost());
			}
		} else {
			System.out.println("invalid Brand Name");
		}
	}

	// View The User By CateGory----------------------------------------------
	public static void ViewProductByCategory() {
		System.out.println("Enter Your Category");
		String category = sc.next();
		List<Product> prods = productdao.findProductByCategory(category);
		if (prods.size() > 0) {
			for (Product p : prods) {
				System.out.println("Id : " + p.getId());
				System.out.println("Name : " + p.getName());
				System.out.println("Brand : " + p.getBrand());
				System.out.println("Category : " + p.getCategory());
				System.out.println("Description : " + p.getDescription());
				System.out.println("Image : " + p.getImage());
				System.out.println("Cost : " + p.getCost());
			}
		} else {
			System.out.println("You Have Enter Invalid Category");
		}

	}
}
