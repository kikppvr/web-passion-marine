"use client";

import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface PDPAModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function PDPAModal({ open, onOpenChange }: PDPAModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                size='xl'
                className='pdpa-modal'
                closeOnOverlayClick={true}
                closeOnEscape={true}>
                <div className='pdpa-modal__header'>
                    <DialogTitle className='pdpa-modal__title'>Privacy Policy</DialogTitle>
                    <DialogClose className='pdpa-modal__close'>
                        <i className='ph ph-x' style={{ fontSize: "24px" }}></i>
                    </DialogClose>
                </div>

                <div className='pdpa-modal__content'>
                    <div className='pdpa-modal__section'>
                        <p className='pdpa-modal__text'>
                            The Company has established this Personal Data Protection Policy to
                            reassure data subjects that the Company has implemented appropriate
                            methods and measures for managing and securing the personal data
                            entrusted to the Company. The collection, use, transfer, processing, and
                            disclosure of personal data are carried out in compliance with the
                            Personal Data Protection Act B.E. 2562 (2019) ("PDPA").
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>
                            1. Collection of Personal Data
                        </h3>
                        <p className='pdpa-modal__text'>
                            The Company will collect personal data only for specific and lawful
                            purposes, within an appropriate scope, and through fair and legitimate
                            means. Data collection will be limited to what is necessary for the
                            Company's operations under such purposes. The Company will notify and
                            obtain consent from the data subject electronically or through the
                            Company's designated methods.
                        </p>
                        <p className='pdpa-modal__text'>
                            For the collection of sensitive personal data, the Company will obtain
                            explicit consent from the data subject unless the data collection falls
                            under any exceptions permitted by the PDPA or other applicable laws.
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>2. Retention of Personal Data</h3>
                        <p className='pdpa-modal__text'>
                            The Company will retain personal data for the following periods:
                        </p>
                        <ul className='pdpa-modal__list'>
                            <li>
                                Where the retention period is specifically required by law, the
                                Company will retain the personal data in accordance with such legal
                                requirements.
                            </li>
                            <li>
                                Where the law does not specify a retention period, the Company will
                                retain personal data only for as long as necessary to fulfill the
                                stated purposes. After the retention period has expired, the Company
                                will delete, destroy, or anonymize the personal data so that it can
                                no longer identify the data subject.
                            </li>
                        </ul>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>
                            3. Purpose of Collecting, Using, Transferring, Processing, or Disclosing
                            Personal Data
                        </h3>
                        <p className='pdpa-modal__text'>
                            The Company will collect personal data only as necessary and for lawful
                            purposes in its capacity as a data controller. The purposes of
                            collecting, using, transferring, processing, or disclosing personal data
                            within the Company group are categorized by data subject type as
                            follows:
                        </p>

                        <h4 className='pdpa-modal__subsection-title'>Personal Data of Customers</h4>
                        <ul className='pdpa-modal__list'>
                            <li>
                                To provide services and improve the Company's products and services,
                                including future products or services, as well as to support
                                maintenance and related operational activities.
                            </li>
                            <li>
                                To facilitate transactions related to the Company's products or
                                services, such as product purchases, installment payments, service
                                appointments, etc.
                            </li>
                            <li>
                                To manage the relationship between the Company and the data subject.
                            </li>
                            <li>
                                To verify and authenticate the identity of the data subject when
                                accessing services through various channels or communicating with
                                the Company.
                            </li>
                            <li>To perform activities according to the data subject's request.</li>
                            <li>
                                For business operations, including data analysis, auditing,
                                development of new products or services, service improvement, usage
                                analysis, survey participation, promotional activities, business
                                planning, and business expansion.
                            </li>
                            <li>
                                For security purposes, including implementing security measures that
                                may involve the personal data of data subjects, such as access to
                                Company premises, logging into websites or applications.
                            </li>
                        </ul>

                        <h4 className='pdpa-modal__subsection-title'>
                            Personal Data of Business Partners
                        </h4>
                        <ul className='pdpa-modal__list'>
                            <li>
                                To perform contractual obligations between the business partner and
                                the Company, and to process personal data for procurement,
                                purchasing, payment, vendor management, audit, and performance
                                evaluation as stipulated in purchase orders, contracts, or relevant
                                documents.
                            </li>
                            <li>
                                For the Company's legitimate interests, such as internal management,
                                development, business operations, product/service development
                                (including websites and applications), research or surveys, fraud
                                and crime prevention, and IT system maintenance.
                            </li>
                            <li>
                                For security measures, including IT system security, Company
                                premises access, and login systems.
                            </li>
                            <li>
                                To communicate news and benefits via letters, email, SMS,
                                applications, social media, telephone, or direct mail.
                            </li>
                        </ul>

                        <h4 className='pdpa-modal__subsection-title'>
                            Personal Data of Shareholders or Directors
                        </h4>
                        <ul className='pdpa-modal__list'>
                            <li>
                                To comply with laws, including corporate management, director
                                nomination and appointment, board meetings, shareholders' meetings,
                                shareholder rights, dividend payments, bond interest payments,
                                accounting and reporting, legal document verification, and document
                                delivery as required for private limited companies, public
                                companies, or listed companies (as applicable).
                            </li>
                            <li>
                                For legitimate interests of the Company or others, such as corporate
                                management, meeting recording, security, Company activities, and
                                communications or proposals beneficial to shareholders or directors,
                                including legal claims.
                            </li>
                        </ul>

                        <h4 className='pdpa-modal__subsection-title'>Personal Data of Employees</h4>
                        <ul className='pdpa-modal__list'>
                            <li>
                                To create and maintain employee databases and employment records.
                            </li>
                            <li>
                                To verify identity, educational background, and employment history.
                            </li>
                            <li>To provide employee benefits and life insurance arrangements.</li>
                            <li>To support employees' tax deductions.</li>
                            <li>
                                To contact, evaluate, and manage the Company's relationship with
                                employees.
                            </li>
                            <li>
                                To disclose employee personal data within the Company group or to
                                lawful successors, or to third parties such as commercial banks for
                                use in obtaining products or services, insurance providers, welfare
                                benefits, employment verification, or to government agencies and
                                state authorities.
                            </li>
                        </ul>

                        <p className='pdpa-modal__text'>
                            The Company may collect, use, transfer, process, or disclose personal
                            data without obtaining consent in the following circumstances:
                        </p>
                        <ul className='pdpa-modal__list'>
                            <li>
                                To investigate or prevent violations or potential violations of the
                                law.
                            </li>
                            <li>
                                To respond to requests from government agencies, including foreign
                                authorities where the data subject resides.
                            </li>
                            <li>
                                Where necessary for the performance of a contract to which the data
                                subject is a party or to fulfill the data subject's request prior to
                                entering into a contract.
                            </li>
                            <li>Where necessary to protect the Company's business operations.</li>
                            <li>
                                Where necessary to protect the privacy, safety, or property of the
                                Company, its personnel, the data subject, or others, including
                                preventing or mitigating harm to life, body, or health.
                            </li>
                            <li>
                                Where the personal data has been disclosed publicly with the
                                explicit consent of the data subject.
                            </li>
                            <li>
                                Where necessary to remedy, prevent, or limit damages to the Company
                                or the data subject.
                            </li>
                            <li>
                                To comply with the law, regulatory investigations, or requirements
                                imposed by governmental authorities.
                            </li>
                        </ul>

                        <p className='pdpa-modal__text'>
                            The Company respects the data subject's freedom to provide consent. No
                            conditions will be imposed that require consent for unnecessary personal
                            data as part of entering into agreements or receiving services. The
                            Company will not process personal data beyond the stated purposes
                            unless:
                        </p>
                        <ul className='pdpa-modal__list'>
                            <li>
                                A new purpose has been notified to the data subject and consent has
                                been obtained; or
                            </li>
                            <li>It is required by the PDPA or other applicable laws.</li>
                        </ul>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>
                            4. Disclosure of Personal Data
                        </h3>
                        <p className='pdpa-modal__text'>
                            The Company may send, transfer, use, process, or disclose personal data
                            to the Company group, auditors, internal and external inspectors,
                            financial institutions, assignees, consultants, co-brand partners, legal
                            entities or individuals with whom the Company has contractual or legal
                            relationships, whether domestic or overseas, or to data processors and
                            governmental or private agencies as required by law or necessary for
                            fulfilling the agreed purposes.
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>
                            5. Personal Data Security Measures
                        </h3>
                        <p className='pdpa-modal__text'>
                            The Company has established privacy protection measures, including
                            defining responsibilities and access restrictions so that only
                            authorized personnel may access personal data. Authorized personnel must
                            strictly comply with the Company's data protection measures and maintain
                            confidentiality. The Company also employs security measures aligned with
                            regulatory standards to safeguard personal data.
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>6. Rights of Data Subjects</h3>
                        <p className='pdpa-modal__text'>
                            The Company has designated contact channels for submitting requests
                            regarding the exercise of data subject rights. Data subjects have the
                            following rights:
                        </p>
                        <ul className='pdpa-modal__list'>
                            <li>
                                The right to access and obtain a copy of their personal data,
                                including the right to disclose how the Company obtained data
                                collected without consent.
                            </li>
                            <li>
                                The right to object to the collection, use, or disclosure of
                                personal data.
                            </li>
                            <li>
                                The right to request deletion, destruction, or anonymization of
                                personal data.
                            </li>
                            <li>The right to request the suspension of data use.</li>
                            <li>
                                The right to request correction of personal data to ensure accuracy
                                and currency.
                            </li>
                            <li>The right to request data portability.</li>
                            <li>
                                The right to withdraw consent at any time, without affecting prior
                                lawful processing that was based on consent.
                            </li>
                            <li>The right to file complaints regarding violations of the PDPA.</li>
                        </ul>
                        <p className='pdpa-modal__text'>
                            Requests must be submitted in writing or via email using the Company's
                            designated forms through the "Contact Channels." The Company will
                            consider and inform the data subject of the result within 30 days from
                            receiving the request. The Company may refuse a request where permitted
                            by law.
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>
                            7. Review and Amendments to the Personal Data Protection Policy
                        </h3>
                        <p className='pdpa-modal__text'>
                            The Company may update or amend this Policy to comply with legal
                            requirements, operational changes, or recommendations from authorities.
                            The Company will clearly announce such changes on its website prior to
                            implementation.
                        </p>
                    </div>

                    <div className='pdpa-modal__section'>
                        <h3 className='pdpa-modal__section-title'>8. Contact Us</h3>
                        <p className='pdpa-modal__text'>
                            If you have any questions about this policy or wish to exercise your
                            rights under the PDPA, please contact us at:
                        </p>
                        <ul className='pdpa-modal__list'>
                            <li>Email: info@passionmarine.co.th</li>
                            <li>Phone: 087-259-9158, 087-585-1656</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
