 import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { withRouter } from "react-router";

import Resource from "../components/Resource";

import { withTranslation } from 'react-i18next';
import i18next from "i18next";

import moment from "moment";

import CATEGORIES from '../constants/categories';
import SUB_CATEGORIES from '../constants/subCategories';

const Locales = require('../constants/locales.json');
const Regions = require('../constants/regions.json');

const styles = {
  sectionHeader: {
    fontWeight: 600,
    fontSize: 20
  }
}

class Submit extends React.Component {

  localeObject = (value = "") => {
    let localeObject = {};
    Locales.forEach(locale => {
      localeObject[locale.id] = value;
    })
    return localeObject;
  };

  constructor(props) {
    super(props);
    
    this.state = {
      locale: Locales[0],
      resource: {
        address: {
          name: this.localeObject(null),
          street: this.localeObject(null),
          city: this.localeObject(null),
          postcode: this.localeObject(null)
        },
        description: this.localeObject("Description"),
        city: this.localeObject("Town"),
        name: this.localeObject("Name"),
        category: CATEGORIES[0],
        subCategory: SUB_CATEGORIES[0],
        links: [],
        organisers: []
      }
    }
  }

  onLocaleSelected = (locale) => {
    i18next.changeLanguage(locale.id, (error, t) => {
      if (!error) {
        this.setState({
          locale
        });
      }
    });
  }

  onCategorySelected = (category) => {
    this.setState({
      category: category == "_all_" ? null : category
    });
  };

  renderDescription = (t) => {
    return (
      <div>
        <Form.Label style={styles.sectionHeader}>{t('submit.description')}</Form.Label>
        {Locales.map((locale, index) => {
          return (
            <Form.Group key={index} as={Row}>
              <Form.Label column sm={2}>{locale.name}</Form.Label>
              <Col sm={10}>
                <Form.Control 
                  as="textarea"
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.description[locale.id] = event.target.value;
                    this.setState({
                      resource
                    })
                  }}
                  value={this.state.resource.description[locale.id]} 
                  placeholder={t('submit.descriptionPlaceholder')}
                  type="text" 
                />
              </Col>
            </Form.Group>
          )
        })} 
      </div>
    )
  };

  renderName = (t) => {
    return (
      <div>
        <Form.Label style={styles.sectionHeader}>{t('submit.name')}</Form.Label>
        {Locales.map((locale, index) => {
          return (
            <Form.Group key={index} as={Row}>
              <Form.Label column sm={2}>{locale.name}</Form.Label>
              <Col sm={10}>
                <Form.Control 
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.name[locale.id] = event.target.value;
                    this.setState({
                      resource
                    })
                  }}
                  value={this.state.resource.name[locale.id]} 
                  type="text" 
                />
              </Col>
            </Form.Group>
          )
        })} 
      </div>
    )
  };

  renderTown = (t) => {
    return (
      <div>
        <Form.Label style={styles.sectionHeader}>{t('submit.city')}</Form.Label>
        {Locales.map((locale, index) => {
          return (
            <Form.Group key={index} as={Row}>
              <Form.Label column sm={2}>{locale.name}</Form.Label>
              <Col sm={10}>
                <Form.Control 
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.city[locale.id] = event.target.value;
                    this.setState({
                      resource
                    })
                  }}
                  value={this.state.resource.city[locale.id]} 
                  type="text" 
                  placeholder={t('submit.townPlaceholder')}
                />
              </Col>
            </Form.Group>
          )
        })} 
      </div>
    )
  };

  renderCategories = (t) => {
    return (
      <Form.Group>
        <Form.Label style={styles.sectionHeader}>{t('submit.category')}</Form.Label>
        <Form.Control 
          value={this.state.resource.category} 
          as="select"
          onChange={event => {
            let category = event.target.value;
            let resource = {...this.state.resource};
            resource.category = category;
            this.setState({resource});
          }}
        >
          {
            CATEGORIES.map((category, index) => {
              return (
                <option
                  value={category}
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.category = event.target.value;
                    this.setState({resource});
                  }}
                >
                {t(`category.${category}`)}
                </option>
              )
            })
          }
        </Form.Control>
      </Form.Group>
    )
  }

  renderSubCategories = (t) => {
    return (
      <Form.Group>
        <Form.Label style={styles.sectionHeader}>{t('submit.subCategory')}</Form.Label>
        <Form.Control 
          value={this.state.resource.subCategory} 
          as="select"
          onChange={event => {
            let category = event.target.value;
            let resource = {...this.state.resource};
            resource.subCategory = category;
            this.setState({resource});
          }}
        >
          {
            SUB_CATEGORIES.map((category, index) => {
              return (
                <option
                  value={category}
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.subCategory = event.target.value;
                    this.setState({resource});
                  }}
                >
                {t(`subCategory.${category}`)}
                </option>
              )
            })
          }
        </Form.Control>
      </Form.Group>
    )
  }

  onAddOrganiser = () => {
    let resource = {...this.state.resource};
    resource.organisers.push(
      {
        name: "",
        number: ""
      }
    );
    this.setState({resource});
  };

  removeOrganiser = (index) => {
    let resource = {...this.state.resource};
    resource.organisers.splice(index, 1);
    this.setState({resource});
  };

  renderAddress = (t) => {
    return (
      <div>
        <Form.Label style={styles.sectionHeader}>{t('submit.address')}</Form.Label>
        {Locales.map((locale, index) => {
          return (
            <div key={index}>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>{locale.name}</Form.Label>
                <Col sm={10}>
                  <Form.Control 
                    onChange={event => {
                      let resource = {...this.state.resource};
                      resource.address.name[locale.id] = event.target.value;
                      this.setState({
                        resource
                      })
                    }}
                    placeholder={t('submit.addressNamePlaceholder')}
                    value={this.state.resource.address.name[locale.id]} 
                    type="text" 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={2}/>
                <Col sm={10}>
                  <Form.Control 
                    onChange={event => {
                      let resource = {...this.state.resource};
                      resource.address.street[locale.id] = event.target.value;
                      this.setState({
                        resource
                      })
                    }}
                    placeholder={t('submit.addressStreetPlaceholder')}
                    value={this.state.resource.address.street[locale.id]} 
                    type="text" 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={2}/>
                <Col sm={10}>
                  <Form.Control 
                    onChange={event => {
                      let resource = {...this.state.resource};
                      resource.address.city[locale.id] = event.target.value;
                      this.setState({
                        resource
                      })
                    }}
                    placeholder={t('submit.addressCityPlaceholder')}
                    value={this.state.resource.address.city[locale.id]} 
                    type="text" 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={2}/>
                <Col sm={10}>
                  <Form.Control 
                    onChange={event => {
                      let resource = {...this.state.resource};
                      resource.address.postcode[locale.id] = event.target.value;
                      this.setState({
                        resource
                      })
                    }}
                    placeholder={t('submit.addressPostcodePlaceholder')}
                    value={this.state.resource.address.postcode[locale.id]} 
                    type="text" 
                  />
                </Col>
              </Form.Group>
            </div>
          )
        })} 
      </div>
    )
  };

  renderOrganisers = (t) => {
    return (
      <div>
        <Form.Label style={styles.sectionHeader}>{t('submit.organisers')}</Form.Label>
        {this.state.resource.organisers.map((link, index) => {
          return (
            <Form.Group key={index}>
              <Form.Label>{t('submit.organiser', { index: index + 1 })}</Form.Label>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>{t('submit.organiserName')}</Form.Label>
                <Col sm={10}>
                <Form.Control 
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.organisers[index].name = event.target.value;
                    this.setState({
                      resource
                    })
                  }}
                  value={this.state.resource.organisers[index].name} 
                  type="text" 
                  style={{marginBottom: 12}}
                  placeholder={t('submit.namePlaceholder')}
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={2}>{t('submit.organiserContact')}</Form.Label>
                <Col sm={10}>
                <Form.Control 
                  onChange={event => {
                    let resource = {...this.state.resource};
                    resource.organisers[index].number = event.target.value;
                    this.setState({
                      resource
                    })
                  }}
                  value={this.state.resource.organisers[index].number} 
                  type="text" 
                  style={{marginBottom: 12}}
                  placeholder={t('submit.contactPlaceholder')}
                />
                </Col>
              </Form.Group>
              <Button
                onClick={this.removeOrganiser.bind(this, index)}
                variant="danger"
              > 
                {t('submit.removeOrganiser')}
              </Button>
            </Form.Group>
          )
        })}
        <br/>
        <Button
          onClick={this.onAddOrganiser}
        >
          {t('submit.addOrganiser')}
        </Button>
      </div>
    )
  }

  onAddLink = () => {
    let resource = {...this.state.resource};
    resource.links.push(
      {
        title: this.localeObject("title"),
        url: ""
      }
    );
    this.setState({resource});
  };

  removeLink = (index) => {
    let resource = {...this.state.resource};
    resource.links.splice(index, 1);
    this.setState({resource});
  };

  renderLinks = (t) => {
    return (
      <div style={{marginBottom: 24}}>
        <Form.Label style={styles.sectionHeader}>{t('submit.links')}</Form.Label>
        {this.state.resource.links.map((link, linkIndex) => {
          return (
            <Form.Group key={linkIndex}>
              <Form.Label>{t('submit.link', { index: linkIndex + 1 })}</Form.Label>
              {Locales.map((locale, index) => {
                return (
                  <Form.Group key={index} as={Row}>
                    <Form.Label column sm={2}>{locale.name}</Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        onChange={event => {
                          let resource = {...this.state.resource};
                          resource.links[linkIndex].title[locale.id] = event.target.value;
                          this.setState({
                            resource
                          })
                        }}
                        value={this.state.resource.links[linkIndex].title[locale.id]} 
                        type="text" 
                        placeholder={t('submit.linkTitlePlaceholder')}
                      />
                    </Col>
                  </Form.Group>
                )
              })}
              <Form.Label>{t('submit.linkUrl')}</Form.Label>
              <Form.Control 
                onChange={event => {
                  let resource = {...this.state.resource};
                  resource.links[linkIndex].url = event.target.value;
                  this.setState({
                    resource
                  })
                }}
                value={this.state.resource.links[linkIndex].url} 
                type="text" 
                style={{marginBottom: 12}}
                placeholder={t('submit.linkURLPlaceholder')}
              />
              <Button
                onClick={this.removeLink.bind(this, linkIndex)}
                variant="danger"
              > 
                {t('submit.removeLink')}
              </Button>
            </Form.Group>
          )
        })}
        <br/>
        <Button
          onClick={this.onAddLink}
        >
          {t('submit.addLink')}
        </Button>
      </div>
    )
  }

  render() {
    const { t } = this.props;
    const { resource } = this.state;
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/">{t('submit.title')}</Navbar.Brand>
        </Navbar>
        <Container style={{marginTop: 20}} fluid="md">
          <h3 style={{textAlign: "center"}}>
          {t('submit.instructions')}
          </h3>
          <Form>
            {this.renderName(t)}
            {this.renderTown(t)}
            {this.renderAddress(t)}
            {this.renderCategories(t)}
            {this.renderSubCategories(t)}
            {this.renderDescription(t)}
            {this.renderLinks(t)}
            {this.renderOrganisers(t)}
          </Form>
          <hr/>
        </Container>
        <Container fluid="md" style={{marginTop: 22}}>
          <h3 style={{textAlign: "center"}}>
            {t('submit.preview')}
          </h3>
          <DropdownButton style={{marginBottom: 12}} title={this.state.locale.name}>
            {Locales.map((locale, index) => <Dropdown.Item onSelect={this.onLocaleSelected.bind(this, locale)} key={index}>{locale.name}</Dropdown.Item>)}
          </DropdownButton>
          <Resource
            locale={this.state.locale.id}
            resource={this.state.resource}
            style={{marginBottom: 24}}
          />
        </Container>
        <Container fluid="md" style={{marginTop: 22}}>
          <p>{JSON.stringify(this.state.resource, null)}</p>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(withRouter(Submit));
