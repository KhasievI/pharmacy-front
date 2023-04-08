import { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./Basket.module.scss";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Index = () => {
  const [opened, setOpened] = useState(false);
  const [payment, setPayment] = useState(false)
  const cartItems = useSelector((state) => state.cart.items);

  const handlePay = () => {
    setPayment(
      <div className={styles.payment}>
        <div class="card shadow-2-strong mb-5 mb-lg-0" >
          <div class="card-body p-4">
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                <form>
                  <div class="d-flex flex-row pb-3">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                        value="" aria-label="..." checked />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                        Card
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row pb-3">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                        value="" aria-label="..." />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                        value="" aria-label="..." />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>PayPal
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-6">
                <div class="row">
                  <div class="col-12 col-xl-6">
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                        placeholder="John Smith" />
                      <label class="form-label" for="typeName">Name on card</label>
                    </div>
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YY"
                        size="7" minlength="7" maxlength="7" />
                      <label class="form-label" for="typeExp">Expiration</label>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                        placeholder="1111 2222 3333 4444" minlength="19" maxlength="19" />
                      <label class="form-label" for="typeText">Card Number</label>
                    </div>
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="password" id="typeText" class="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                      <label class="form-label" for="typeText">Cvv</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-3">
                <div class="d-flex justify-content-between" >
                  <p class="mb-2">Subtotal</p>
                  <p class="mb-2">$23.49</p>
                </div>
                <div class="d-flex justify-content-between" >
                  <p class="mb-0">Shipping</p>
                  <p class="mb-0">$2.99</p>
                </div>
                <hr class="my-4" />
                <div class="d-flex justify-content-between mb-4" >
                  <p class="mb-2">Total (tax included)</p>
                  <p class="mb-2">$26.48</p>
                </div>
                <button type="button" class="btn btn-primary btn-block btn-lg">
                  <div>
                    <span>Оплатить</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button style={{ textAlign: 'end', border: 'none', paddingRight: '50px' }} onClick={handleClose} className="btnX"><h3>back to shop</h3></button>
      </div>
    )
  }

  const handleClose = () => {
    setPayment(false);
  }

  return (
    <>
      {!opened ?
        <div className={styles.cartButton} onClick={() => setOpened(true)}>
          <img src={bagIcon} alt="img" />
          {cartItems.length ? <span>{cartItems.length}</span> : ''}
        </div> : ''}
      {opened &&
        (cartItems.length === 0 ? (
          <div>
            <div className={styles.cartButton} style={{ textAlign: 'end' }} onClick={() => setOpened(false)}><img src='./exit.png' style={{ width: '6%' }} alt="img" /></div>
          </div>
        ) : (
          <> 
            <div className={styles.cartButton} style={{ textAlign: 'end' }} onClick={() => setOpened(false)}><img src='./exit.png' style={{ width: '6%' }} alt="img" /></div>
            <table >
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                  <td><h4>Название</h4></td>
                  <td><h4>Остаток</h4></td>
                  <td><h4>Количество</h4></td>
                  <td><h4>Сумма</h4></td>
                  <td>
                    <button onClick={handlePay} class="btn btn-danger" style={{ width: '65%', textAlign: 'center', paddingLeft: '3px', paddingRight: '3px' }}>Оплатить</button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {payment}
                {cartItems.map((cartItem, index) => {
                  return (
                    <Cart {...cartItem} num={index + 1} />
                  );
                })}
              </tbody>
            </table>
          </>
        ))}
    </>
  );
};

export default Index;
