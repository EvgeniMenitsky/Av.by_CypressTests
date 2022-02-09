Feature: Search

    Test search functionality

    Scenario Outline: Search by price
        Given I open main page
        When I select <model> model
        And I select price from <from> to <to> in currency <currency>
        And I click search button
        Then I check that all ads have <model> title

    Examples:
    | model  | from | to | currency |
    |  "BMW"   |  5000  |  7000   | "BYN" |
    |  "Citroen"   |  4500  |  4600  | "USD" |