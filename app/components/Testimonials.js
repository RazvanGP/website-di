import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="min-h-screen w-full flex justify-center gap-6 p-10 relative z-[11]">
      <div className="flex flex-col gap-4">
        <Card
          author={"John"}
          position={"Senior Hull Engineer"}
          textBody={
            " Lorem ipsum dolor sit amet elit. Voluptates quamus sed accusantium esse quisquam amet reicien quamus sed accusantium esse quisquam amet reicien"
          }
          imgSrc={
            "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
          }
        />
        <Card
          author={"John"}
          position={"Senior Hull Engineer"}
          textBody={
            " Lorem ipsum dolor sit amet elit. Voluptates quamus sed accusantium esse quisquam amet reicien quamus sed accusantium esse quisquam amet reicien"
          }
          gender={"man"}
        />
        <Card
          author={"Anna"}
          position={"Senior Hull Engineer"}
          textBody={
            " Lorem ipsum dolor sit amet elit. Voluptates quamus sed accusantium esse quisquam amet reicien quamus sed accusantium esse quisquam amet reicien"
          }
          gender={"woman"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
