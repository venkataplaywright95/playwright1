package com.frost.learningmate;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;

public class Sample {

//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		
//	
//		WebDriver driver= new ChromeDriver();
//		driver.get("https://www.google.com/");
//		
//		
//
//	}
	
	
	@Test(invocationCount = 5)
	public void Logi()
	{
		WebDriver driver= new ChromeDriver();
		
		
		
		
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		
	}
	

}
