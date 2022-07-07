import React, {useState, useEffect, useLayoutEffect} from 'react'
import ReactModal from 'react-modal';
import styles from './project.module.css'
import Title3 from '../titles/Title3/Title3'
import {FaGithubSquare} from 'react-icons/fa'
import {MdImage} from 'react-icons/md'
import {FiArrowRightCircle} from 'react-icons/fi'

export default function Project(props) {

    useEffect(() => {
        updateViewportSize();
        window.addEventListener('resize', updateViewportSize);
        return () => window.removeEventListener('resize', updateViewportSize); 
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const [viewportSize, setViewportSize] = useState();

    const updateViewportSize = function(){
        setViewportSize({w: document.body.clientWidth, h: window.innerHeight})
    }

    const [imageSize, setImageSize] = useState();

    const [imageDownloading, setImageDownloading] = useState(false);

    const updateImageSize = function(url){
        var img = new Image();
        img.src = url;
        img.onload = function(){
            setImageSize({w: this.width, h: this.height}); 
        }
    }

    if(imageDownloading === false){
        setImageDownloading(true);
        updateImageSize(props.project.image);
    }

    const [newModalSize, setNewModalSize] = useState();

    useLayoutEffect(() => {
        if(viewportSize !== undefined && imageSize !== undefined){
            let wRatio = viewportSize.w / imageSize.w;
            let hRatio = viewportSize.h / imageSize.h;
            let padding;
            let changeFactor;

            if(window.innerWidth < 601){
                padding = 0.04;
            }
            else if (window.innerWidth < 768){
                padding = 0.075;
            } 
            else if (window.innerWidth < 1100){
                padding = 0.15;
            } else {
                padding = 0.22
            }
            if(wRatio < hRatio){
                changeFactor = viewportSize.w / imageSize.w * (1 - padding);
            } else {
                changeFactor = viewportSize.h / imageSize.h * (1 - padding);
            }
            
            let newModalWidth = imageSize.w * changeFactor;
            let newModalHeight = imageSize.h * changeFactor;
            setNewModalSize({w: newModalWidth, h: newModalHeight});
        }
    }, [viewportSize, imageSize]);

    var technologies = props.project.technologies.items.join(", ");

    return (
        <div className={styles.project}> 
            <div className={styles.heightSetter}>
                <div className={styles.content}>
                    <Title3 title={props.project.title} style={{margin: '0px', color: 'var(--primaryMediumColour)'}} />
                    <p>{technologies}</p>
                    <div className={styles.icons}>
                        {props.project.githubLink && 
                            <a aria-label="See this project's code on github" className={styles.iconLink} href={props.project.githubLink} target="_blank">
                                <div className={styles.projectIconContainer}>
                                    <FaGithubSquare className={[styles.githubIcon, styles.projectIcon].join(' ')}/>
                                </div>
                            </a>
                        }
                        {props.project.image &&
                            <button aria-label="Project image" className={[styles.imageBtn, styles.iconLink].join(' ')} onClick={handleOpenModal}>
                                <div className={styles.projectIconContainer}>
                                    <MdImage className={[styles.imageIcon, styles.projectIcon].join(' ')} />
                                </div>
                            </button>
                        }
                        {props.project.url &&
                            <a aria-label="See project live" className={[styles.projectLink, styles.iconLink].join(' ')} href={props.project.url} target="_blank">
                                <div className={styles.projectIconContainer}>
                                    <FiArrowRightCircle className={[styles.projectLinkIcon, styles.projectIcon].join(' ')}/>
                                </div>
                            </a>
                        }
                    </div>
                    {
                        props.project.image &&
                        <div>
                            <ReactModal 
                                isOpen={showModal}
                                contentLabel="Project Image"
                                appElement={document.getElementById('root')}
                                className={styles.modalContentContainer}
                                overlayClassName={styles.modalOverlay}
                                style = {newModalSize === undefined ? {} : 
                                    {
                                        overlay: {
                                            width: `${document.body.clientWidth}px`,
                                        },
                                        content: {
                                            width: `${newModalSize.w}px`,
                                            height: `${newModalSize.h}px`
                                        }
                                    } 
                                }
                            >
                                <div className={styles.modalContent}> 
                                    <button aria-label="Close Project Image" className={styles.closeModalBtn} onClick={handleCloseModal}>
                                        <div className={styles.closeBtnBckg}></div>
                                        <div className={[styles.line, styles.line1].join(' ')}></div>
                                        <div className={[styles.line, styles.line2].join(' ')}></div>
                                    </button>                     
                                    <img className={styles.projectImg} src={props.project.image}></ img>
                                </div>
                            </ReactModal>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
