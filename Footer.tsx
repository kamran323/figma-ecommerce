export default function Footer() {
    return (
      <div className="sm:py-5 md:py-0 bg-black sm:pl-5 md:pl-0 sm:gap-y-5 md:gap-y-0 flex sm:flex-col md:flex-row text-white justify-evenly sm:items-start md:item-center sm:h-full md:h-[300px]  ">
        <div className="pl-3 my-0 ml-3">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <ul>
            <li><h2>Subcribe</h2></li>
            <li><h3>Get 10% off your first order</h3></li>
            <li>Enter your email</li>
          </ul>
          </div>
        <div>
          <h1 className="text-2xl font-bold">Support</h1>
          <ul>
            <li>111 Bijoy sarani, Dhaka, <br /> 
               DH 1515, Bangladesh. </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
          </div>
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <ul>
            <li>My Account</li>
            <li>login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
          </div>
        <div>
          <h1 className="text-2xl font-bold">Quick Link</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          </div>
      </div>
        );
  }