import Card from "./components/Card";
import "./styles.css";
import img_1 from "./img-1.jpg";
import img_2 from "./img2.jpg";
import img_3 from "./img3.jpg";
import img_4 from "./n.jpg";
export default function App() {
  return (
    <div className="App">
      <div className="main-heading">
        <h4>Let's Collaborate</h4>
      </div>

      <Card
        heading="AI + RPA is what we do"
        imgsrc={img_1}
        content="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
        services="AI + RPA Automation"
      />
      <Card
        heading="Make Bolder Choices"
        imgsrc={img_2}
        content="Digital focused strategies to realize market-changing ideas"
        services="Build Better Apps"
      />
      <Card
        heading="Innovate with Speed"
        imgsrc={img_3}
        content="Create higher quality software, deliver on customer expectations and business goals"
        services="DevOps"
      />
      <Card
        heading="Embrace Cloud"
        imgsrc={img_4}
        content="With Cloud-First accelerate innovation and optimize performance"
        services="Cloud Services"
      />
    </div>
  );
}
