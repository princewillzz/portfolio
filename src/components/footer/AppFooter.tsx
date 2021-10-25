import { GithubOutlined, InstagramOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'

export const AppFooter = () => {
    return (
        <>
            <FooterWrapper>
                <section>
                    <ul className="footer-nav-links">
                        
                        <li className="footer-nav-link">
                            <span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/harsh2212/"
                                >
                                    <LinkedinFilled />
                                </a>
                            </span>
                        </li>
                        <li className="footer-nav-link">
                            <span>
                                <a href="mailto:harshtiwariai@gmail.com">
                                    <MailOutlined />
                                </a>
                            </span>
                        </li>
                        <li className="footer-nav-link">
                            <span>
                                <a
                                    href="https://github.com/princewillzz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubOutlined />
                                </a>
                            </span>
                        </li>
                        <li className="footer-nav-link">
                            <span>
                                <a href="https://www.instagram.com/prince_willz_/" target="_blank" rel="noopener noreferrer">
                                    <InstagramOutlined />
                                </a>
                            </span>
                        </li>
                        
                    </ul>
                <Divider style={{ backgroundColor: "#999999", height: 200 }} type="vertical" />
                </section>
            </FooterWrapper>
        </>
    )
}

const FooterWrapper = styled(Footer)`


	section {
		text-align: center;
	}

	.footer-nav-links {
        padding: 0;
        margin: 0;
		list-style: none;
	}

	.footer-nav-link {
		cursor: pointer;
	}

	.footer-nav-link .anticon {
		font-size: 24px;
		color: #999999;

		transition: all 350ms;

	}

    .footer-nav-link:hover .anticon {
        color: #ff4d4f;
        transform: scale(2) translateY(-10px);
    }

    // Large screen
    @media only screen and (min-width: 800px) {

        position: fixed;
        bottom: 0;
        left: 20px;
        textAlign: center;

        background: none;
        padding: 0;

        .footer-nav-links {
            margin-bottom: 10px;
        }

        .footer-nav-link {
            margin-top: 10px;
        }

    }

    // Small screen
    @media only screen and (max-width: 800px) {
        background: #272727;

        .footer-nav-links {
            display: flex;
            gap: 2rem;
            justify-content: center;
        }

        .ant-divider {
            display: none;
        }

    }

`;