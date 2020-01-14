import React, { useEffect, useRef } from "react";
import { PageHeader, Service } from "Components/";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import servicesImage from "Assets/images/contact-page-header.jpg";
import CustomServicesNav from "Components/CustomServicesNav";
import "./ServicesPage.scss";

const ServicesPage = props => {
  const { t } = useTranslation();
  useEffect(() => {
    props.setNotLanding(true);
  });
  const servicesObject = t("services.service", { returnObjects: true });
  const serviceRefs = useRef(
    Array.from({ length: Object.keys(servicesObject).length }, () => React.createRef())
  );
  return (
    <>
      <PageHeader imagePath={servicesImage} pageTitle={t("services.title")} />
      <Container className="services-page">
        <CustomServicesNav servicesObject={servicesObject} serviceRefs={serviceRefs} />
        <hr className="linebreak" />
        <div className="flavor">
          <Typography align="center" variant="h6" className="flavor-text">
            {t("services.flavorText")}
          </Typography>
        </div>
        {servicesObject != null &&
          Object.keys(servicesObject).map((key, index) => (
            <Service
              reference={serviceRefs.current[index]}
              key={key}
              title={t(`services.service.${key}.title`)}
              content={t(`services.service.${key}.body`)}
              image={servicesImage}
              imageAlt={t(`services.service.${key}.imageAlt`)}
            />
          ))}
      </Container>
    </>
  );
};

export default ServicesPage;
