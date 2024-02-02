Feature: Product store Website

Scenario Outline: New message dialog should contains valid data

    Given I open home page
    When I click Contact link in the header from home page
    Then Contact dialog title should "be equal to" "New message"
    And Contact dialog should "contain" field title "Contact Email"
    And Contact dialog should "contain" field title "Contact Name"
    And Contact dialog should "contain" field title "Message"
    And On contact dialog "Contact Email" field is displayed
    And On contact dialog "Contact Name" field is displayed
    And On contact dialog "Message" field is displayed
    And On contact dialog Close button is displayed
    And On contact dialog Send Message button is displayed
    And On contact dialog x-close button is displayed

Scenario Outline: Adding product to the shopping cart

    Given I open home page
    When I click Phones link in the side categories menu
    Then Product items is displayed on the result table and their number is more than 0
    When I click on 1 item from the result table
    Then Product title is displayed
    And Product title should "be equal to" product title from the result table
    And Product image is displayed
    When I click on Add to cart button
    And I click Cart link in the header from home page
    Then Cart items count should "be equal to" 1
    And Cart item title should "be equal to" product title from the result table



