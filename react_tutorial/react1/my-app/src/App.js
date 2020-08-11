import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import NameCard from "./component/NameCard";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <NameCard 
        url_image="https://images.unsplash.com/photo-1597037682167-61eba513c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        name="Travel_img_1"
        phone="(123)-123-1234"
        email="123@123.com"
        />
      <NameCard
        url_image="https://images.unsplash.com/photo-1597037682167-61eba513c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        name="Travel_img_2"
        phone="(222)-222-2222"
        email="222@222.com"
      />
      <NameCard
        url_image="https://images.unsplash.com/photo-1597037682167-61eba513c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        name="Travel_img_3"
        phone="(333)-333-3333"
        email="333@333.com"
      />
      <NameCard
        url_image="https://images.unsplash.com/photo-1597037682167-61eba513c1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        name="Travel_img_4"
        phone="(444)-444-4444"
        email="444@444.com"
      />
      <Footer/>
    </div>
  )
};

export default App;
