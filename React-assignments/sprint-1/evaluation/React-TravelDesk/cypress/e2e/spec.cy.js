import mock from "../fixtures/hotelsdata.json";
import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

describe("react cofee house", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`Heading should be visible when the component loads and there should be a button with Get Hotels`, () => {
      cy.visit(url);
      cy.contains("h1", /Travel Desk/).should("be.visible");
      cy.get("button").should("be.visible").should("contain", "Get Hotels");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should make a get request to endpoint when clicked on Get Hotels button and Get Hotels button should not exist on DOM once clicked on it", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get(".get-hotels").should("not.exist");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Able to display All the hotels on the DOM", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get(`[data-testid="hotel-card"]`).should("have.length", mock.length);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all hotels details are visible along with the buttons", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child).find("img").should("be.visible");
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] h2`)
              .should("contain", mock[index].name);
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] p`)
              .eq(0)
              .should("contain", mock[index].location);
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] p`)
              .eq(1)
              .should("contain", mock[index].pricePerNight);
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] p`)
              .eq(2)
              .should("contain", mock[index].availableRooms);
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] p`)
              .eq(2)
              .should("contain", mock[index].availability.checkIn);
            cy.wrap(child)
              .find(`[data-testid="cardinfo"] p`)
              .eq(2)
              .should("contain", mock[index].availability.checkOut);
            cy.wrap(child)
              .find(`button`)
              .eq(0)
              .should("be.visible")
              .should("contain", "Show Amenities");
            cy.wrap(child)
              .find(`[data-testid="show-amenities"]`)
              .should("not.exist");
            cy.wrap(child)
              .find(`button`)
              .eq(1)
              .should("be.visible")
              .should("contain", "Request Booking");
          }
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check Request Booking button is there for Hotel and Cancel Request is not present by default", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child).find(".request-booking").should("be.visible");
            cy.wrap(child).find(".cancel_request_button").should("not.exist");
          }
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check on clicking on Show Amenities button is working as per the problem statement", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get('[data-testid="cardinfo"]').each((child, index) => {
        if (index % 3 === 0) {
          cy.wrap(child)
            .find("button")
            .eq(0)
            .should("be.visible")
            .should("contain", "Show Amenities")
            .click({ force: true })
            .should("contain", "Hide Amenities");
          cy.get(`[data-testid="show-amenities"]`).should("exist");
          mock[index].amenities.forEach((ele, ind) => {
            cy.wrap(child).find("li").eq(ind).should("contain", ele);
          });
          cy.wrap(child)
            .find("button")
            .eq(0)
            .should("be.visible")
            .should("contain", "Hide Amenities")
            .click({ force: true })
            .should("contain", "Show Amenities");
          cy.get(`[data-testid="show-amenities"]`).should("not.exist");
        }
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("On clicking on the Request Booking button, the button should get disabled and the text content should change accordingly and also a new button to Cancel Request should be visible", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      cy.get('[data-testid="book-hotel-buttons"]')
        .should("have.length", mock.length)
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child)
              .find(".request-booking")
              .should("exist")
              .should("contain", `Request Booking`)
              .click({ force: true })
              .should("contain", `Request Placed`)
              .should("be.disabled");
            cy.wrap(child)
              .find(".cancel_request_button")
              .should("exist")
              .should("contain", `Cancel Request`)
              .click({ force: true });
            cy.get(".cancel_request_button").should("not.exist");
          }
        });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("When someone click on Request Booking, the cost should be visible in the h6 tag", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      let totalcost = 0;
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 4 === 0) {
            totalcost += mock[index].pricePerNight;
            console.log(totalcost);
            cy.wrap(child)
              .find(".request-booking")
              .should("exist")
              .should("contain", `Request Booking`)
              .should("be.visible")
              .click({ force: true })
              .should("contain", `Request Placed`);
          }
        })
        .then(() => {
          cy.get(".totalcost").should("exist").should("contain", "Total cost");
          console.log("totalcostFinal", totalcost);
          cy.get(".totalcost").should("exist").should("contain", totalcost);
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("When someone click on Request Booking button and then when we click on Cancel Request button, the cost should be visible in the h6 tag and should not exist when the value is 0", () => {
      cy.intercept("GET", "**/get-accomodations*").as("get-hotels-list");
      cy.visit(url);
      cy.get(".get-hotels").should("be.visible").click();
      cy.wait("@get-hotels-list");
      let totalcost = 0;
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 4 === 0) {
            totalcost += mock[index].pricePerNight;
            console.log(totalcost);
            cy.wrap(child)
              .find(".request-booking")
              .should("exist")
              .should("contain", `Request Booking`)
              .should("be.visible")
              .click({ force: true })
              .should("contain", `Request Placed`);
          }
        })
        .then(() => {
          cy.get(".totalcost").should("exist").should("contain", "Total cost");
          console.log("totalcostFinal", totalcost);
          cy.get(".totalcost").should("exist").should("contain", totalcost);
        });
      //cancel booking
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 4 === 0) {
            console.log(totalcost);
            cy.wrap(child)
              .find(".cancel_request_button")
              .should("exist")
              .should("contain", `Cancel Request`)
              .should("be.visible")
              .click({ force: true });
            totalcost -= mock[index].pricePerNight;
            if (totalcost) {
              cy.get(".totalcost").should("exist").should("contain", totalcost);
            }
          }
        })
        .then(() => {
          cy.get(".totalcost").should("not.exist");
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
