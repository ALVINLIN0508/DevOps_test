import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager



# Improved Driver Fixture
@pytest.fixture
def driver():
    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()

    driver = webdriver.Chrome(
        service=service,
        options=options
    )

    driver.maximize_window()
    yield driver
    driver.quit()



# Test 1: Homepage Title
@pytest.mark.skip(reason="Skipping this test for demo")
def test_homepage_title(driver):
    driver.get("https://lab.fi/en")
    assert "LAB University of Applied Sciences" in driver.title
    time.sleep(2)



# Test 2: Main Heading Exists
@pytest.mark.skip(reason="Skipping this test for demo")
def test_homepage_main_heading(driver):
    driver.get("https://lab.fi/en")

    heading = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.TAG_NAME, "h1"))
    )

    assert heading.is_displayed()
    assert heading.text != ""
    time.sleep(2)  
    


# Helper: Close Cookie Banner
def close_cookie_banner(driver):
    try:
        cookie_button = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.ID, "ppms_cm_reject-all"))
        )
        cookie_button.click()
    except:
        pass


#Test 3: Navigation
@pytest.mark.skip(reason="Skipping this test for demo")
def test_faculties_navigation(driver):
    driver.get("https://lab.fi/en")
    close_cookie_banner(driver)

    link = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable(
            (By.LINK_TEXT, "Technology")
        )
    )

    link.click()

    WebDriverWait(driver, 10).until(
        EC.url_contains("/en/technology")
    )

    assert "/en/technology" in driver.current_url

    driver.save_screenshot("technology_page.png")

# Mobile View + Screenshot
@pytest.mark.skip(reason="Skipping this test for demo")
def test_mobile_view(driver):
    driver.set_window_size(390, 844)
    driver.get("https://lab.fi/en")

    size = driver.get_window_size()
    assert size["width"] > 0
    assert size["height"] > 0

    driver.save_screenshot("mobile_view.png")
    time.sleep(2)
   