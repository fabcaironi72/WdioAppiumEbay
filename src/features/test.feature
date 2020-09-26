Feature: eBay Test

    Scenario: Search for Pilas and print the number of items found to the console
    Given I open the eBay URL
    When  I search for Pilas
    And I click the search button
    Then I print the number of items found to the console