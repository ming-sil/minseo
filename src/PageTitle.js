import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>MINSEO | {title}</title>
    </Helmet>
  );
};
