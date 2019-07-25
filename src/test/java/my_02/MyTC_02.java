package my_02;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class MyTC_02 {
	WebDriver driver;
	@Given("He opens URL of application")
	public void he_opens_URL_of_application() {
		System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver_win32\\chromedriver.exe");
		  driver=new ChromeDriver();
		  driver.get("http://10.232.237.143:443/TestMeApp");
		  driver.manage().window().maximize();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He clicks on Sign up link")
	public void he_clicks_on_Sign_up_link() {
		driver.findElement(By.xpath("//a[contains(text(),'SignUp')]")).click();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Given("He enters the username {string}")
	public void he_enters_the_username(String a) {
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(a);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters the first name {string}")
	public void he_enters_the_first_name(String b) {
		driver.findElement(By.xpath("//input[@name='firstName']")).sendKeys(b);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters the last name {string}")
	public void he_enters_the_last_name(String c) {
		driver.findElement(By.xpath("//input[@name='lastName']")).sendKeys(c);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters password {string}")
	public void he_enters_password(String d) {
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(d);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters confirm password {string}")
	public void he_enters_confirm_password(String e) {
		driver.findElement(By.xpath("//input[@name='confirmPassword']")).sendKeys(e);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He selects gender")
	public void he_selects_gender() {
		driver.findElement(By.xpath("//span[text()='Female']")).click();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters email address {string}")
	public void he_enters_email_address(String f) {
		driver.findElement(By.xpath("//input[@name='emailAddress']")).sendKeys(f);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enter mobile number {string}")
	public void he_enter_mobile_number(String g) {
		driver.findElement(By.xpath("//input[@name='mobileNumber']")).sendKeys(g);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters date of birth {string}")
	public void he_enters_date_of_birth(String h) {
		driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(h);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters his address {string}")
	public void he_enters_his_address(String i) {
		driver.findElement(By.xpath("//*[@id=\"address\"]")).sendKeys(i);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He selects the security question")
	public void he_selects_the_security_question() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters answer for the question {string}")
	public void he_enters_answer_for_the_question(String k) {
		driver.findElement(By.xpath("//input[@name='answer']")).sendKeys(k);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He finally clicks on register link")
	public void he_finally_clicks_on_register_link() {
		driver.findElement(By.xpath("//input[@name='Submit']")).click();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Given("He again enters username for login {string}")
	public void he_again_enters_username_for_login(String l) {
		driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(l);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("He enters password for login {string}")
	public void he_enters_password_for_login(String m) {
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(m);
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

	@Then("Finally click on login button")
	public void finally_click_on_login_button() {
		driver.findElement(By.xpath("//input[@name='Login']")).click();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
	}

}
