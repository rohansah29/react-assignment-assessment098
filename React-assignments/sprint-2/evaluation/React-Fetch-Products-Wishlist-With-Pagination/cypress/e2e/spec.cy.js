/// <reference types= "cypress" />
import page1 from "../fixtures/page1.json";
import page2 from "../fixtures/page2.json";
import page3 from "../fixtures/page3.json";
import page4 from "../fixtures/page4.json";
import wishlist from "../fixtures/wishlist.json";

import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "shanti-local" }];

describe("React Fetch Products Wishlist", () => {
	let acc_score = 1;

	data.forEach(({ submission_link: url, id }) => {
		if (url.charAt(url.length - 1) != "/") {
			url = url + "/";
		}

		it("Should have a title", () => {
			cy.visit(url);
			cy.get("h1").should("contain", "React Product Wishlist");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should make GET request to endpoint", () => {
			cy.intercept("GET", "**/get-tech-products?**").as("get-products");
			cy.visit(url);
			cy.wait("@get-products").then((res) => {
				console.log(res);
				expect(res.response.statusCode).eq(200);
			});

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Loading indicator should be there while data is loading in the page", () => {
			cy.intercept("GET", "**/get-tech-products?**", (req) => {
				req.reply((res) => {
					res.setDelay(1500); // Add a delay of 500 milliseconds
				});
			}).as("get-products");

			cy.visit(url);

			cy.get(".loading_indicator")
				.should("exist")
				.and("have.text", "Loading...");

			cy.wait("@get-products").then((res) => {
				console.log(res);
				expect(res.response.statusCode).eq(200);
			});

			cy.get(".loading_indicator").should("not.exist");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should have correct product visible in the dom for page 1", () => {
			cy.visit(url);

			cy.get(".products_wrapper").children().should("have.length", 5);
			cy.get(".products_wrapper")
				.children()
				.each((child, index) => {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", page1[index].img);
					cy.wrap(child).find("h3").should("contain", page1[index].brand);
					cy.wrap(child).find("h4").should("contain", page1[index].category);
					cy.wrap(child).find("p").should("contain", page1[index].details);
					cy.wrap(child).find("p").should("contain", page1[index].price);
				});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should have pagination buttons visible", () => {
			cy.get(".pagination_wrapper").children().should("have.length", 4);
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Should have correct product visible in the dom for page 2", () => {
			cy.visit(url);
			cy.get(".pagination_wrapper").children().should("have.length", 4);
			cy.get(".pagination_wrapper")
				.children()
				.eq(0)
				.should("be.disabled")
				.and("have.css", "background-color", "rgb(255, 0, 0)");
			cy.get(".pagination_wrapper").children().eq(1).click();

			cy.wait(200);

			cy.get(".products_wrapper")
				.children()
				.each((child, index) => {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", page2[index].img);
					cy.wrap(child).find("h3").should("contain", page2[index].brand);
					cy.wrap(child).find("h4").should("contain", page2[index].category);
					cy.wrap(child).find("p").should("contain", page2[index].details);
					cy.wrap(child).find("p").should("contain", page2[index].price);
				});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should have correct product visible in the dom for page 3", () => {
			cy.visit(url);
			cy.get(".pagination_wrapper").children().should("have.length", 4);

			cy.get(".pagination_wrapper").children().eq(2).click();

			cy.get(".pagination_wrapper")
				.children()
				.eq(2)
				.should("be.disabled")
				.and("have.css", "background-color", "rgb(255, 0, 0)");

			cy.wait(200);

			cy.get(".products_wrapper")
				.children()
				.each((child, index) => {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", page3[index].img);
					cy.wrap(child).find("h3").should("contain", page3[index].brand);
					cy.wrap(child).find("h4").should("contain", page3[index].category);
					cy.wrap(child).find("p").should("contain", page3[index].details);
					cy.wrap(child).find("p").should("contain", page3[index].price);
				});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should have correct product visible in the dom for page 4", () => {
			cy.visit(url);
			cy.get(".pagination_wrapper").children().should("have.length", 4);

			cy.get(".pagination_wrapper").children().eq(3).click();

			cy.get(".pagination_wrapper")
				.children()
				.eq(3)
				.should("be.disabled")
				.and("have.css", "background-color", "rgb(255, 0, 0)");

			cy.wait(200);

			cy.get(".products_wrapper")
				.children()
				.each((child, index) => {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", page4[index].img);
					cy.wrap(child).find("h3").should("contain", page4[index].brand);
					cy.wrap(child).find("h4").should("contain", page4[index].category);
					cy.wrap(child).find("p").should("contain", page4[index].details);
					cy.wrap(child).find("p").should("contain", page4[index].price);
				});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should change button text when product is added to wishlist", () => {
			cy.visit(url);
			cy.get(".addToWishlist_btn")
				.eq(0)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".addToWishlist_btn")
				.eq(1)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".addToWishlist_btn")
				.eq(2)
				.click()
				.should("have.text", "Go To Wishlist")
				.click();

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Should have products in wishlist that are added", () => {
			cy.visit(url);
			cy.get(".addToWishlist_btn")
				.eq(0)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".pagination_wrapper").children().eq(1).click();

			cy.wait(200);

			cy.get(".addToWishlist_btn")
				.eq(3)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".pagination_wrapper").children().eq(2).click();

			cy.wait(200);

			cy.get(".addToWishlist_btn")
				.eq(1)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".pagination_wrapper").children().eq(3).click();

			cy.wait(200);

			cy.get(".addToWishlist_btn")
				.eq(0)
				.click()
				.should("have.text", "Go To Wishlist")
				.click();

			cy.get(".products_wrapper").should("not.exist");

			cy.get(".wishlist_container").should("exist");

			cy.get(".wishlist_products_wrapper").children().should("have.length", 4);

			cy.get(".wishlist_products_wrapper")
				.children()
				.each((child, index) => {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", wishlist[index].img);
					cy.wrap(child).find("h3").should("contain", wishlist[index].brand);
					cy.wrap(child).find("h4").should("contain", wishlist[index].category);
					cy.wrap(child).find("p").should("contain", wishlist[index].details);
					cy.wrap(child).find("p").should("contain", wishlist[index].price);
				});

			cy.get(".removeWishlist_btn").should("have.length", 4);

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Should have remove from wishlist button", () => {
			cy.get(".removeWishlist_btn").should("contain", "Remove From Wishlist");
			cy.get(".removeWishlist_btn").should("have.length", 4);
			cy.get(".removeWishlist_btn").eq(0).click();
			cy.get(".removeWishlist_btn").should("have.length", 3);

			cy.get(".removeWishlist_btn").eq(1).click();
			cy.get(".removeWishlist_btn").should("have.length", 2);

			cy.get(".removeWishlist_btn").eq(0).click();
			cy.get(".removeWishlist_btn").should("have.length", 1);

			cy.get(".removeWishlist_btn").eq(0).click();
			cy.get(".removeWishlist_btn").should("have.length", 0);

			cy.get(".wishlist_products_wrapper").children().should("have.length", 0);
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Should have a go back button", () => {
			cy.get(".goBack_btn").should("exist").click();

			cy.get(".products_wrapper").should("exist");
			cy.get(".wishlist_container").should("not.exist");

			cy.then(() => {
				acc_score += 1;
			});
		});
		it("check onclicking go back button the products that are added to wishlist should have Go To Wishlist as button text", () => {
			cy.visit(url);
			cy.get(".addToWishlist_btn")
				.eq(0)
				.click()
				.should("have.text", "Go To Wishlist");

			cy.get(".addToWishlist_btn")
				.eq(1)
				.click()
				.should("have.text", "Go To Wishlist")
				.click();

			// cy.get(".addToWishlist_btn").eq(0).click();

			cy.get(".products_wrapper").should("not.exist");

			cy.get(".wishlist_container").should("exist");

			cy.get(".wishlist_products_wrapper").children().should("have.length", 2);

			cy.get(".goBack_btn").should("exist").click();

			cy.get(".products_wrapper").should("exist");
			cy.get(".addToWishlist_btn").eq(0).should("have.text", "Go To Wishlist");
			cy.then(() => {
				acc_score += 1;
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
