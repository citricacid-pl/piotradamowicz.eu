import './PageSection.css';

const PageSection = ({ title, children }) => {
  return (
    <section className="PageSection">
      <h2>About</h2>
      <div>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
