package org.jsp.loginApp;

import java.sql.*;
import java.util.Scanner;

public class LogInVallidation {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Your Name");
		String nm = sc.next();
		System.out.println("Enter Your Password");
		String pw = sc.next();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		String qry = "select * from btm.password where name=? and password=?";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306?user=root&password=admin");
			ps = con.prepareStatement(qry); // Compilation;
			// Set The Data From Place Holder
			ps.setString(1, nm);
			ps.setString(2, pw);
			// Execute;
			rs = ps.executeQuery();
			if (rs.next()) {
				String un = rs.getString(3);
				System.out.println("Welcome:- " + un);
			} else {
				System.err.println("You Have Enter Invalid :- "+nm+" and "+pw);
			}

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (ps != null) {
				try {
					ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			System.out.println("Close The Constally Resources");
			sc.close();
		}
	}
}
