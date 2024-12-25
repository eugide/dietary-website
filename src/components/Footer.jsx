import { Link } from "react-router";

function Footer() {
  return (
    <div>
      <div className="bg-[#3a3a3a] py-[30px] text-center text-white">
        <p>Sample text. Click to select the Text Element.</p>
        <p className="pt-[80px]">
          This site was created with the
          <Link className="underline underline-offset-4" to="">Nicepage</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
