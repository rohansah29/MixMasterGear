import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../components/Payment.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import tk from "../image/Tk-removebg.png";

export default function Payment() {
  const { sum } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  //   const showToast = () => {
  //     toast({
  //       position: 'bottom-right',
  //       render: () => (
  //         <Box
  //           color="white"
  //           p={3}
  //           bg="gray.800"
  //           borderRadius="md"
  //           boxShadow="md"
  //           display="flex"
  //           alignItems="center"
  //         >
  //           <Image src={tk} alt="Image" boxSize="40px" mr={3} />
  //           <Text>Here's an image toast!</Text>
  //         </Box>
  //       ),
  //     });
  //   };

  const handleOrder = () => {
    // showToast();
    setToggle(true);

    setTimeout(() => {
      navigate("/");
      setToggle(false);
      toast({
        title: "Order Placed !",
        description: "Order Placed Successfully !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 4000);
  };

  return (
    <div>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml="40px"
        mt="10px"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" _hover={{ color: "red" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem color="#00BFA5">
          <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#00BFA5">
          <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {toggle ? (
        <Image src={tk} w="50%" style={{ margin: "auto" }} />
      ) : (
        <>
          <div className="maincontainer">
            <div class="container">
              <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">SUBTOTAL</h6>
                      </div>
                      <span class="text-muted">₹{sum}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Delivery Charge</h6>
                      </div>
                      <span class="text-muted">₹0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                      <div class="text-success">
                        <h6 class="my-0" style={{ marginLeft: "-70px" }}>
                          Promo code
                        </h6>
                        <small class="text-muted">
                          (no promo code applied yet!)
                        </small>
                      </div>
                      <span class="text-success">-₹0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (INR)</span>
                      <strong>₹{sum}</strong>
                    </li>
                  </ul>
                  <form class="card p-2">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Promo code"
                      />
                      <div class="input-group-append">
                        <button type="button" class="btn btn-secondary">
                          Redeem
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-8 order-md-1">
                  <h4 class="mb-3">Billing Address</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required
                        />
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="email">
                        Email <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address2">
                        Address 2 <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select
                          class="custom-select d-block w-100"
                          id="country"
                          required
                        >
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select
                          class="custom-select d-block w-100"
                          id="state"
                          required
                        >
                          <option value="">Choose...</option>
                          <option value="">Select state</option>
                          <option value="AN">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="AP">Andhra Pradesh</option>
                          <option value="AR">Arunachal Pradesh</option>
                          <option value="AS">Assam</option>
                          <option value="BR">Bihar</option>
                          <option value="CH">Chandigarh</option>
                          <option value="CT">Chhattisgarh</option>
                          <option value="DN">Dadra and Nagar Haveli</option>
                          <option value="DD">Daman and Diu</option>
                          <option value="DL">Delhi</option>
                          <option value="GA">Goa</option>
                          <option value="GJ">Gujarat</option>
                          <option value="HR">Haryana</option>
                          <option value="HP">Himachal Pradesh</option>
                          <option value="JK">Jammu and Kashmir</option>
                          <option value="JH">Jharkhand</option>
                          <option value="KA">Karnataka</option>
                          <option value="KL">Kerala</option>
                          <option value="LA">Ladakh</option>
                          <option value="LD">Lakshadweep</option>
                          <option value="MP">Madhya Pradesh</option>
                          <option value="MH">Maharashtra</option>
                          <option value="MN">Manipur</option>
                          <option value="ML">Meghalaya</option>
                          <option value="MZ">Mizoram</option>
                          <option value="NL">Nagaland</option>
                          <option value="OR">Odisha</option>
                          <option value="PY">Puducherry</option>
                          <option value="PB">Punjab</option>
                          <option value="RJ">Rajasthan</option>
                          <option value="SK">Sikkim</option>
                          <option value="TN">Tamil Nadu</option>
                          <option value="TG">Telangana</option>
                          <option value="TR">Tripura</option>
                          <option value="UP">Uttar Pradesh</option>
                          <option value="UT">Uttarakhand</option>
                          <option value="WB">West Bengal</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="same-address"
                      />
                      <label class="custom-control-label" for="same-address">
                        Shipping address is the same as my billing address
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="save-info"
                      />
                      <label class="custom-control-label" for="save-info">
                        Save this information for next time
                      </label>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <hr class="mb-4" />
                      <h4 class="mb-3">Payment</h4>
                      <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            checked
                            required
                          />
                          <label class="custom-control-label" for="credit">
                            Credit card
                          </label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            required
                          />
                          <label class="custom-control-label" for="debit">
                            Debit card
                          </label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            required
                          />
                          <label class="custom-control-label" for="paypal">
                            Paypal
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label for="cc-name">Name on card</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-name"
                            placeholder=""
                            required
                          />
                          <small class="text-muted">
                            Full name as displayed on card
                          </small>
                          <div class="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="cc-number">Credit card number</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-number"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3 mb-3">
                          <label for="cc-expiration">Expiration</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label for="cc-expiration">CVV</label>
                          <input
                            type="text"
                            class="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div>
                      <hr class="mb-4" />
                      <Button
                        bg="black"
                        w="100px"
                        onClick={handleOrder}
                        color="#00BFA5"
                      >
                        Place Order
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
