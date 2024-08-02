import "./Homepage.css"

export default function Homepage(){
return(
<>
<div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col">
    <div className="text-left" style={{maxWidth:"250px"}}>
    <img src="/src/assets/cosmetics.jpg" className="img-fluid rounded-circle mb-3 glowing-image" alt="Beauty Cosmetics"></img>
</div>
</div>
    <div className="col">
      <div className="p-3">
        <h1 >WELCOME,</h1>
        <h4>To <strong>Cosmetic Wisdom</strong></h4>
        <h3>Where beauty is made possible!</h3>
      </div>
    </div>
  </div>
</div>
<br /><br />
<div className="row">
  <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/src/assets/facials.jpg" className="img-fluid rounded-start" alt="Facials"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Facial Products</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <a href="/about" className  ="btn btn-primary">Get information on products</a>
    </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/src/assets/brushes.jpg" className="img-fluid rounded-start" alt="Brushes"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Makeup Brushes</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <a href="/about" className="btn btn-primary">Get information on products</a>

      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/src/assets/eyeshadow.jpg" className="img-fluid rounded-start" alt="EyeShadows"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">EyeShadows</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <a href="/about" className="btn btn-primary">Get information on products</a>

      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/src/assets/lipsticks.jpg" className="img-fluid rounded-start" alt="Lipsticks"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Lipsticks</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <a href="/about" className="btn btn-primary">Get information on products</a>

      </div>
    </div>
  </div>
</div>
</div>
</>
);
}