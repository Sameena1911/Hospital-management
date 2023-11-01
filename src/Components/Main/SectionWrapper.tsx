type Props = { id: string; children: React.ReactNode };

const SectionWrapper = ({ id, children }: Props) => {
  return (
    <section className="pt-20 md:pt-32" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
