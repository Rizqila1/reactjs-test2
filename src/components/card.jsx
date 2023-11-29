export default function Card({ children, className }) {
  return (
    <section className={`card color rounded-[30px] inline-block ${className}`}>
      {children}
    </section>
  );
}

function Title({ children, className }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function Body({ children, className }) {
  return <section className={`${className}`}>{children}</section>;
}

Card.Title = Title;
Card.Body = Body;
