<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<% 
		String name = request.getParameter("name");
		String age = request.getParameter("age");
	
		out.println("My name is "+name+"<br>");
		out.println("Age is "+age);
	%>