import "./Briefcase.scss";

const Briefcase = () => {
  return (
    <div className="tree-container">
      <div className="tree-node root-node">
        <div className="node-content">
          {/* <h3>The Problem</h3> */}
          <p>What Are We Tackling?</p>
        </div>
        <div className="branch">
          <div className="tree-node child-node">
            <div className="node-content">
              <h3>Supply Chain Inefficiencies.</h3>
              {/* <p>Industries face disruptions due to inaccurate demand forecasting and a reactive approach to supply chain management, leading to delays, excess inventory, or shortages.</p> */}
            </div>
          </div>
          <div className="tree-node child-node">
            <div className="node-content">
              <h3>Data Privacy and Security Concerns</h3>
              {/* <p>Businesses are hesitant to share sensitive data due to the risks of breaches and unauthorized access, hindering collaboration and data-driven decision-making.</p> */}
            </div>
          </div>
          <div className="tree-node child-node">
            <div className="node-content">
              <h3>Poor Collaboration Across Businesses</h3>
              {/* <p>This results to missed opportunities for improved forecasting accuracy and overall industry efficiency.</p> */}
            </div>
          </div>
          <div className="tree-node child-node">
            <div className="node-content">
              <h3>AI Integration Challenges</h3>
              {/* <p>Not integrating AI-driven solutions limits the ability of businesses to scale operations and adapt to market changes effectively.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Briefcase;
