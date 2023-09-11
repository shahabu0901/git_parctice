package org.jsp.SpringMvcApp.controller;

import org.jsp.SpringMvcApp.dao.UserDao;
import org.jsp.SpringMvcApp.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
	@Autowired
	private UserDao dao;

	@RequestMapping(value = "/save")
	public ModelAndView saveUser(@ModelAttribute User u, ModelAndView view) {
		u = dao.saveUser(u);
		view.setViewName("print");
		view.addObject("msg", " User Saved With Id :- " + u.getId());
		return view;
	}

	@RequestMapping(value = "/update")
	public ModelAndView updateUser(@ModelAttribute User u, ModelAndView view) {
		u = dao.updateUser(u);
		view.setViewName("print");
		view.addObject("msg", " User Updated With Id :- " + u.getId());
		return view;
	}

	@RequestMapping("/find")
	public ModelAndView findUserById(@RequestParam int id, ModelAndView view) {
		User u = dao.findById(id);
		if (u != null) {
			view.setViewName("display");
			view.addObject("user", u);
			return view;
		} else {
			view.setViewName("print");
			view.addObject("msg", " You Have Entered an Invalid Id");
			return view;
		}
	}

	@RequestMapping(value = "/verify", method = RequestMethod.POST)
	public ModelAndView findUserById(@RequestParam long phone, @RequestParam String password, ModelAndView view) {
		User u = dao.verifyUser(phone, password);
		if (u != null) {
			view.setViewName("display");
			view.addObject("user", u);
			return view;
		} else {
			view.setViewName("print");
			view.addObject("msg", "Invalid Phone Number or Password");
			return view;
		}
	}

	@RequestMapping("/delete")
	public ModelAndView deleteUser(@RequestParam int id, ModelAndView view) {
		boolean deleted = dao.deleteUser(id);
		if (deleted) {
			view.setViewName("print");
			view.addObject("msg", "User Deleted");
			return view;
		} else {
			view.setViewName("print");
			view.addObject("msg", "Cannot Delete User");
			return view;
		}
	}

	@RequestMapping("/load")
	public String loadView(@RequestParam String view) {
		return view;
	}
}
