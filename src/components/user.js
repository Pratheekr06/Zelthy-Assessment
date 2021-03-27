import React, { Component } from 'react';
import styles from './style.module.css';
import { Modal, Button } from 'react-bootstrap';

class User extends Component {
    constructor(props){
        super(props);
        const { userName, emailId, phone, website, company, city, zipCode,} = this.props;
        this.state = { 
            like: false,
            detailShow: false,
            username: userName,
            email: emailId,
            phoneNo: phone,
            web: website,
            companyname: company,
            cityname: city,
            pincode: zipCode,
            moreInfo: false,
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleLike = () => {
        const { like } = this.state;
         this.setState({
             like: !like,
         })
    };

    handleDetailShow = () => {
         this.setState({
            detailShow: true,
         })
    }

    handleDetailClose = () => {
         this.setState({
            detailShow: false,
         })
    }

    handleMoreInfo = () => {
         const { moreInfo } = this.state;
         this.setState({
             moreInfo: !moreInfo
         })
    }

    render() {
        const { like, username, email, phoneNo, web, companyname, cityname, pincode, moreInfo, detailShow } = this.state;
        const { userName, emailId, phone, website, avatars, company, city, zipCode, handleDeleteUser, arrIndex} = this.props; 
        return ( 
            <React.Fragment>
                <div className="card">
                    <div className="card-body text-md-start">
                        <section dangerouslySetInnerHTML={{ __html: avatars }} />
                        <h5 className="card-title">{userName}</h5>
                        <p className="card-text"><i className={`bi bi-envelope ${styles.cardIcons}`}></i>{emailId}</p>
                        <p className="card-text"><i className={`bi bi-telephone ${styles.cardIcons}`}></i>{phone}</p>
                        <p className="card-text"><i className={`bi bi-globe ${styles.cardIcons}`}></i>{website}</p>
                        {moreInfo ? (
                            <div>
                            <p className="card-text"><i className={`bi bi-building ${styles.cardIcons}`}></i>{company}</p>
                            <p className="card-text"><i className={`bi bi-flag ${styles.cardIcons}`}></i>{city}</p>
                            <p className="card-text mb-0 pb-0"><i className={`bi bi-geo-alt ${styles.cardIcons}`}></i>{zipCode}</p>
                            </div>
                        ) : ''}
                        <a onClick={this.handleMoreInfo} className={`nav-link ${styles.moreInfo}`}>
                            {!moreInfo ? (
                                <span>More Info</span>
                            ) : (
                                <span>Less Info</span>
                            )}
                        </a>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className={`col ${styles.footerIcons}`}>
                                <i onClick={this.handleLike} className={`${styles.like} ${like ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'}`}></i>
                            </div>
                            <div className={`col ${styles.footerIcons}`}>
                                <i onClick={this.handleDetailShow} className={`bi bi-pencil-fill ${styles.edit}`}></i>
                            </div>
                            <div className="col">
                            <i onClick={() => handleDeleteUser(arrIndex)} className={`bi bi-trash-fill ${styles.delete}`}></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Modal centered show={detailShow} onHide={this.handleDetailClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="row input-group mb-3">
                                <div className="col-xs-12 col-md-3 col-lg-2">
                                    <label className="form-label">Name:</label>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-10">
                                <input readOnly name="username" onChange={e => this.handleChange(e)} type="text" value={username || ''} className="form-control" />
                                </div>
                            </div>

                            <div className="row input-group mb-3">
                                <div className="col-xs-12 col-md-3 col-lg-2">
                                    <label className="form-label">Email:</label>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-10">
                                <input name="email" onChange={e => this.handleChange(e)} type="text" value={email || ''} className="form-control" />
                                </div>
                            </div>

                            <div className="row input-group mb-3">
                                <div className="col-xs-12 col-md-3 col-lg-2">
                                    <label className="form-label">Phone:</label>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-10">
                                <input name="phoneNo" onChange={e => this.handleChange(e)} type="text" value={phoneNo || ''} className="form-control" />
                                </div>
                            </div>

                            <div className="row input-group mb-3">
                                <div className="col-xs-12 col-md-3 col-lg-2">
                                    <label className="form-label">Website:</label>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-10">
                                <input name="web" onChange={e => this.handleChange(e)} type="text" value={web || ''} className="form-control" />
                                </div>
                            </div>

                            {moreInfo ? (
                                <>
                                    <div className="row input-group mb-3">
                                        <div className="col-xs-12 col-md-3 col-lg-2">
                                            <label className="form-label">Company:</label>
                                        </div>
                                        <div className="col-xs-12 col-md-9 col-lg-10">
                                        <input name="companyname" onChange={e => this.handleChange(e)} type="text" value={companyname || ''} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row input-group mb-3">
                                        <div className="col-xs-12 col-md-3 col-lg-2">
                                            <label className="form-label">City:</label>
                                        </div>
                                        <div className="col-xs-12 col-md-9 col-lg-10">
                                        <input name="cityname" onChange={e => this.handleChange(e)} type="text" value={cityname || ''} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row input-group mb-3">
                                        <div className="col-xs-12 col-md-3 col-lg-2">
                                            <label className="form-label">ZipCode:</label>
                                        </div>
                                        <div className="col-xs-12 col-md-9 col-lg-10">
                                        <input name="pincode" onChange={e => this.handleChange(e)} type="text" value={pincode || ''} className="form-control" />
                                        </div>
                                    </div>
                                </>
                            
                            ) : ''}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="light" onClick={this.handleDetailClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={this.handleDetailClose}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default User;