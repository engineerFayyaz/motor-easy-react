import { useEffect } from "react";

const CardCarousel = () => {
    useEffect(() => {
        const itemsMainDiv = document.querySelector('.MultiCarousel');
        const itemsDiv = document.querySelector('.MultiCarousel-inner');
        let itemWidth = "";

        const leftButton = document.querySelector('.leftLst');
        const rightButton = document.querySelector('.rightLst');

        leftButton.addEventListener('click', () => click(0));
        rightButton.addEventListener('click', () => click(1));

        function ResCarouselSize() {
            let incno = 0;
            const dataItems = "data-items";
            const itemClass = '.item';
            const sampwidth = itemsMainDiv.clientWidth;
            const bodyWidth = document.body.clientWidth;
            const itemsSplit = itemsMainDiv.getAttribute(dataItems).split(',');

            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            } else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }

            itemsDiv.style.transform = 'translateX(0px)';
            itemsDiv.style.width = itemWidth * itemsDiv.querySelectorAll(itemClass).length + 'px';

            itemsDiv.querySelectorAll(itemClass).forEach(item => {
                item.style.width = itemWidth + 'px';
            });

            leftButton.classList.add("over");
            rightButton.classList.remove("over");
        }

        function ResCarousel(e, s) {
            const leftBtn = leftButton;
            const rightBtn = rightButton;
            let translateXval = '';
            const xds = Math.abs(getComputedStyle(itemsDiv).transform.split(',')[4].trim());

            if (e === 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                rightBtn.classList.remove("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    leftBtn.classList.add("over");
                }
            } else if (e === 1) {
                const itemsCondition = itemsDiv.clientWidth - itemsMainDiv.clientWidth;
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                leftBtn.classList.remove("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    rightBtn.classList.add("over");
                }
            }

            itemsDiv.style.transform = 'translateX(' + -translateXval + 'px)';
        }

        function click(ell) {
            const slide = itemsMainDiv.getAttribute("data-slide");
            ResCarousel(ell, slide);
        }

        ResCarouselSize();

        window.addEventListener('resize', ResCarouselSize);

        const autoPlayInterval = setInterval(() => click(1), 5000);

        return () => {
            window.removeEventListener('resize', ResCarouselSize);
            clearInterval(autoPlayInterval);
        };
    }, []);

    return (
        <div className="row">
            <div className="col-lg-12">
                <div
                    className="MultiCarousel"
                    data-items="1,3,5,6"
                    data-slide={1}
                    id="MultiCarousel"
                    data-interval={1000}
                >
                    <div className="MultiCarousel-inner">
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-car-side" />
                                </p>
                                <p>Car Warranty</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-car-on" />
                                </p>
                                <p>GPA Insurance</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-taxi" />
                                </p>
                                <p>Services</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-person-breastfeeding" />
                                </p>
                                <p>MOT</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-brands fa-pinterest" />
                                </p>
                                <p>Tyres</p>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-car-side" />
                                </p>
                                <p>Car Warranty</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-car-on" />
                                </p>
                                <p>GPA Insurance</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-taxi" />
                                </p>
                                <p>Services</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-solid fa-person-breastfeeding" />
                                </p>
                                <p>MOT</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">
                                    <i className="fa-brands fa-pinterest" />
                                </p>
                                <p>Tyres</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pad15">
                                <p className="lead">Multi Item Carousel</p>
                                <p>₹ 1</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary rightLst">&gt;</button>
                    <button className="btn btn-primary leftLst">&lt;</button>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
