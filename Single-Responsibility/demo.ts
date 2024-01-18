class UserDetails {
  private login: boolean;
  protected cartItems: number;
  protected addTotal: number;

  constructor() {
    this.login = false;
    this.cartItems = 0;
    this.addTotal = 0;
  }

  checkLogin(login: boolean) {
    this.login = login;
    console.log("Items added to cart");
  }

  showCartItems(cartItems: number) {
    this.cartItems = cartItems;
    console.log(`You have ${this.cartItems} items in your cart`);
  }

  calculateOrder(addTotal: number) {
    this.addTotal = addTotal;
    console.log(`Your total is ${this.addTotal}`);
  }

  getLoginStatus() {
    return this.login;
  }
}

const user1 = new UserDetails();

user1.checkLogin(true);

const loginStatus = user1.getLoginStatus();
console.log(loginStatus);
