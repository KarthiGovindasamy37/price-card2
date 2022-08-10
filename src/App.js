import logo from './logo.svg';
import './App.css';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let data=[
    {
      plan:"Free",
      price:0,
      currency:"$",
      period:"month",
      features:[
        {
          title:"Single User",
          enable:true
        },
        {
          title:"5GB Storage",
          enable:true
        },
        {
          title:"Unlimited Public Projects",
          enable:true
        },
        {
          title:"Community Access",
          enable:true
        },
        {
          title:"Unlimited Private Projects",
          enable:false
        },
        {
          title:"Dedicated Phone Support",
          enable:false
        },
        {
          title:"Free Subdomain",
          enable:false
        },
        {
          title:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      plan:"Plus",
      price:9,
      currency:"$",
      period:"month",
      features:[
        {
          title:"5 Users",
          enable:true,
          bold:true
        },
        {
          title:"50GB Storage",
          enable:true
        },
        {
          title:"Unlimited Public Projects",
          enable:true
        },
        {
          title:"Community Access",
          enable:true
        },
        {
          title:"Unlimited Private Projects",
          enable:true
        },
        {
          title:"Dedicated Phone Support",
          enable:true
        },
        {
          title:"Free Subdomain",
          enable:true
        },
        {
          title:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      plan:"Pro",
      price:49,
      currency:"$",
      period:"month",
      features:[
        {
          title:"Unlimited Users",
          enable:true,
          bold:true
        },
        {
          title:"150GB Storage",
          enable:true
        },
        {
          title:"Unlimited Public Projects",
          enable:true
        },
        {
          title:"Community Access",
          enable:true
        },
        {
          title:"Unlimited Private Projects",
          enable:true
        },
        {
          title:"Dedicated Phone Support",
          enable:true
        },
        {
          title:"Unlimited Free Subdomains",
          enable:true
        },
        {
          title:"Monthly Status Reports",
          enable:true
        }
      ]
    }
    
  ]
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          data.map((item)=>{
            return <Card item={item}></Card>
          })
        }
        </div>
        </div>
        </section>
  );
}

export default App;
