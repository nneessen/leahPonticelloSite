import React from "react";
import ServiceItem from "../features/services/ServiceItem";
import Card from "../ui/Card";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

export default function Services() {
  const goBack = useMoveBack();
  return (
    <>
      <Button $variation="secondary" onClick={goBack}>
        Go Back
      </Button>
      <Card
        title="Service 1"
        body={<ServiceItem serviceDescription="DESCRIPTION 1" />}
      />
      <Card
        title="Service 2"
        body={<ServiceItem serviceDescription="DESCRIPTION 2" />}
      />
      <Card
        title="Service 3"
        body={<ServiceItem serviceDescription="DESCRIPTION 3" />}
      />
    </>
  );
}
