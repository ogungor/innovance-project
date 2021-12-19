import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
  const [applications, setApplications] = useState(null);

  const isLogin = localStorage.getItem("loginInfo");

  useEffect(() => {
    fetch("http://localhost:8000/applications")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApplications(data);
      });
  }, []);

  return (
    <div>
      <Banner />
      {isLogin ? (
        <div className="d-flex flex-wrap justify-content-center justify-content-md-between m-3">
          {applications &&
            applications.map((app) => (
              <div
                key={app.id}
                className="border border-secondary card-area mb-4"
              >
                <img src={app.image} className="w-100" alt="" />
                <div className="p-3">
                  <div className="mb-2">
                    <span className="card-title">App Name:</span>
                    <span className="card-text">{app.app_name}</span>
                  </div>
                  <div className="mb-2">
                    <span className="card-title">Description:</span>
                    <span className="card-desc">{app.description}</span>
                  </div>
                  <div className="mb-2">
                    <span className="card-title">Download Count:</span>
                    <span className="card-desc">{app.download_count}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="m-4">
          <p>To see this page, you need to login !</p>
          <p>After login, you will redirect to this page.</p>
          <p>Dont forget to run "npm server" from different terminal before you check that page. It takes json server data !</p>
        </div>
      )}
    </div>
  );
};
export default Home;
