import React from "react";
import PageTitle from "../../components/UI/PageTitle.tsx";
import Authorization from "../../components/Account/Authorization.tsx";

const Account = () => {
  return (
    <>
      <section className="page-title">
        <PageTitle title="Account" />
      </section>
      <section className="authorization">
        <Authorization />
      </section>
    </>
  );
};

export default Account;
