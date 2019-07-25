package my_03;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber .class)
@CucumberOptions(features="cucum",glue="my_02",
plugin={"html:target/cucumber-htmlreport.html"})
public class MyTC_03 {
	
}
