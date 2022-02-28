import React from 'react'

export const Aside = () => {
    return (
        <div className="left-sidebar-pro">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <a href="#"><img className="main-logo" src="dist/img/logo/logo.png" /></a>
                    <strong><img src="dist/img/logo/logosn.png" /></strong>
                </div>
                <div className="nalika-profile">
                    <div className="profile-dtl">
                        <a href="#"><img src="dist/img/notification/4.jpg" /></a>
                        <h2>Lakian <span className="min-dtn">Das</span></h2>
                    </div>
                    <div className="profile-social-dtl">
                        <ul className="dtl-social">
                            <li><a href="#"><i className="icon nalika-facebook" /></a></li>
                            <li><a href="#"><i className="icon nalika-twitter" /></a></li>
                            <li><a href="#"><i className="icon nalika-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="left-custom-menu-adp-wrap comment-scrollbar">
                    <nav className="sidebar-nav left-sidebar-menu-pro">
                        <ul className="metismenu" id="menu1">
                            <li className="active">
                                <a className="has-arrow" href="index.html">
                                    <i className="icon nalika-home icon-wrap" />
                                    <span className="mini-click-non">Ecommerce</span>
                                </a>
                                <ul className="submenu-angle" aria-expanded="true">
                                    <li><a title="Dashboard v.1" href="index.html"><span className="mini-sub-pro">Dashboard v.1</span></a></li>
                                    <li><a title="Dashboard v.2" href="index-1.html"><span className="mini-sub-pro">Dashboard v.2</span></a></li>
                                    <li><a title="Dashboard v.3" href="index-2.html"> <span className="mini-sub-pro">Dashboard v.3</span></a></li>
                                    <li><a title="Product List" href="product-list.html"><span className="mini-sub-pro">Product List</span></a></li>
                                    <li><a title="Product Edit" href="product-edit.html"><span className="mini-sub-pro">Product Edit</span></a></li>
                                    <li><a title="Product Detail" href="product-detail.html"><span className="mini-sub-pro">Product Detail</span></a></li>
                                    <li><a title="Product Cart" href="product-cart.html"><span className="mini-sub-pro">Product Cart</span></a></li>
                                    <li><a title="Product Payment" href="product-payment.html"><span className="mini-sub-pro">Product Payment</span></a></li>
                                    <li><a title="Analytics" href="analytics.html"><span className="mini-sub-pro">Analytics</span></a></li>
                                    <li><a title="Widgets" href="widgets.html"><span className="mini-sub-pro">Widgets</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-mail icon-wrap" /> <span className="mini-click-non">Mailbox</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Inbox" href="mailbox.html"><span className="mini-sub-pro">Inbox</span></a></li>
                                    <li><a title="View Mail" href="mailbox-view.html"><span className="mini-sub-pro">View Mail</span></a></li>
                                    <li><a title="Compose Mail" href="mailbox-compose.html"><span className="mini-sub-pro">Compose Mail</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-diamond icon-wrap" /> <span className="mini-click-non">Interface</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Google Map" href="google-map.html"><span className="mini-sub-pro">Google Map</span></a></li>
                                    <li><a title="Data Maps" href="data-maps.html"><span className="mini-sub-pro">Data Maps</span></a></li>
                                    <li><a title="Pdf Viewer" href="pdf-viewer.html"><span className="mini-sub-pro">Pdf Viewer</span></a></li>
                                    <li><a title="X-Editable" href="x-editable.html"><span className="mini-sub-pro">X-Editable</span></a></li>
                                    <li><a title="Code Editor" href="code-editor.html"><span className="mini-sub-pro">Code Editor</span></a></li>
                                    <li><a title="Tree View" href="tree-view.html"><span className="mini-sub-pro">Tree View</span></a></li>
                                    <li><a title="Preloader" href="preloader.html"><span className="mini-sub-pro">Preloader</span></a></li>
                                    <li><a title="Images Cropper" href="images-cropper.html"><span className="mini-sub-pro">Images Cropper</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-pie-chart icon-wrap" /> <span className="mini-click-non">Miscellaneous</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="File Manager" href="file-manager.html"><span className="mini-sub-pro">File Manager</span></a></li>
                                    <li><a title="Blog" href="blog.html"><span className="mini-sub-pro">Blog</span></a></li>
                                    <li><a title="Blog Details" href="blog-details.html"><span className="mini-sub-pro">Blog Details</span></a></li>
                                    <li><a title="404 Page" href="404.html"><span className="mini-sub-pro">404 Page</span></a></li>
                                    <li><a title="500 Page" href="500.html"><span className="mini-sub-pro">500 Page</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-bar-chart icon-wrap" /> <span className="mini-click-non">Charts</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Bar Charts" href="bar-charts.html"><span className="mini-sub-pro">Bar Charts</span></a></li>
                                    <li><a title="Line Charts" href="line-charts.html"><span className="mini-sub-pro">Line Charts</span></a></li>
                                    <li><a title="Area Charts" href="area-charts.html"><span className="mini-sub-pro">Area Charts</span></a></li>
                                    <li><a title="Rounded Charts" href="rounded-chart.html"><span className="mini-sub-pro">Rounded Charts</span></a></li>
                                    <li><a title="C3 Charts" href="c3.html"><span className="mini-sub-pro">C3 Charts</span></a></li>
                                    <li><a title="Sparkline Charts" href="sparkline.html"><span className="mini-sub-pro">Sparkline Charts</span></a></li>
                                    <li><a title="Peity Charts" href="peity.html"><span className="mini-sub-pro">Peity Charts</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-table icon-wrap" /> <span className="mini-click-non">Data Tables</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Peity Charts" href="static-table.html"><span className="mini-sub-pro">Static Table</span></a></li>
                                    <li><a title="Data Table" href="data-table.html"><span className="mini-sub-pro">Data Table</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-forms icon-wrap" /> <span className="mini-click-non">Forms Elements</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Basic Form Elements" href="basic-form-element.html"><span className="mini-sub-pro">Bc Form Elements</span></a></li>
                                    <li><a title="Advance Form Elements" href="advance-form-element.html"><span className="mini-sub-pro">Ad Form Elements</span></a></li>
                                    <li><a title="Password Meter" href="password-meter.html"><span className="mini-sub-pro">Password Meter</span></a></li>
                                    <li><a title="Multi Upload" href="multi-upload.html"><span className="mini-sub-pro">Multi Upload</span></a></li>
                                    <li><a title="Text Editor" href="tinymc.html"><span className="mini-sub-pro">Text Editor</span></a></li>
                                    <li><a title="Dual List Box" href="dual-list-box.html"><span className="mini-sub-pro">Dual List Box</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="mailbox.html" aria-expanded="false"><i className="icon nalika-smartphone-call icon-wrap" /> <span className="mini-click-non">App views</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Notifications" href="notifications.html"><span className="mini-sub-pro">Notifications</span></a></li>
                                    <li><a title="Alerts" href="alerts.html"><span className="mini-sub-pro">Alerts</span></a></li>
                                    <li><a title="Modals" href="modals.html"><span className="mini-sub-pro">Modals</span></a></li>
                                    <li><a title="Buttons" href="buttons.html"><span className="mini-sub-pro">Buttons</span></a></li>
                                    <li><a title="Tabs" href="tabs.html"><span className="mini-sub-pro">Tabs</span></a></li>
                                    <li><a title="Accordion" href="accordion.html"><span className="mini-sub-pro">Accordion</span></a></li>
                                </ul>
                            </li>
                            <li id="removable">
                                <a className="has-arrow" href="#" aria-expanded="false"><i className="icon nalika-new-file icon-wrap" /> <span className="mini-click-non">Pages</span></a>
                                <ul className="submenu-angle" aria-expanded="false">
                                    <li><a title="Login" href="login.html"><span className="mini-sub-pro">Login</span></a></li>
                                    <li><a title="Register" href="register.html"><span className="mini-sub-pro">Register</span></a></li>
                                    <li><a title="Lock" href="lock.html"><span className="mini-sub-pro">Lock</span></a></li>
                                    <li><a title="Password Recovery" href="password-recovery.html"><span className="mini-sub-pro">Password Recovery</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>

    )
}
