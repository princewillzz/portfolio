import { GithubOutlined, InstagramOutlined, LinkedinFilled, MailOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'

export const AppFooter = () => {
    return (
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
            </section>
        </FooterWrapper>
    )
}

const FooterWrapper = styled(Footer)`

    // Footer 
    background: #272727;

	section {
		// text-align: center;
	}

	.footer-nav-links {
        padding: 0;
        margin: 0;
		// margin-top: 2rem;
		display: flex;
		gap: 2rem;
		list-style: none;
		justify-content: center;
        
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
        transform: scale(2.2) translateY(-10px);
    }

`;