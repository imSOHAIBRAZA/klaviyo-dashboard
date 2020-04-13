import React, { Component } from 'react';
import './style.css';

import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import axios from "axios";


class ConceptMapContainer extends Component {

    constructor(props) {
        super(props);

        this.stageHeight = 600;
        this.stageWidth = 600;

        this.keywordNodeSize = 20;
        this.keywordNodeSpacing = 30;
        this.KeywordNodeX = 150;

        this.categoryNodeHeight = 30;
        this.categoryNodeWidth = 100;
        this.categoryNodeSpacing = 20;
        this.categoryNodeX = this.stageWidth - this.categoryNodeWidth - 150;

        this.lineColor = "#003f5c";
        this.rectStrokeColor = "black";
        this.rectFillColor = "#dd5182";
        this.circleStrokeColor = "black";
        this.circleFillColor = "#a05195";

        this.highlightColor = "#ffa600";

        this.textFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif';

        this.state = {
            data:[]
            // data: [
            //     { "keyword": "Computer science", "rank": 1, "source": "twitter", "category": ["Major", "Subject"] },
            //     { "keyword": "Math", "rank": 2, "source": "scholar", "category": ["Major", "Subject"] },
            //     { "keyword": "Literature", "rank": 3, "source": "twitter", "category": ["Major", "Subject", "Biopic"] },
            //     { "keyword": "Machine Learning", "rank": 4, "source": "scholar", "category": ["Major", "Subject", "Coding"] },
            //     { "keyword": "Cooking", "rank": 5, "source": "scholar", "category": ["Major", "Subject", "Hobby"] },
            //     { "keyword": "Engineering", "rank": 3, "source": "twitter", "category": ["Major"] },
            //     { "keyword": "Cars", "rank": 2, "source": "twitter", "category": ["Major", "Item", "Automobile"] },
            //     { "keyword": "Facebook", "rank": 2, "source": "scholar", "category": ["Social Media", "Marketing"] },
            //     { "keyword": "Research", "rank": 4, "source": "twitter", "category": ["Major"] },
            //     { "keyword": "Investment", "rank": 5, "source": "scholar", "category": ["Major", "Finance"] }
            // ]
        }
    }


   
//   componentDidMount() {
// // Make a request for a user with a given ID
// axios.get('https://cors-anywhere.herokuapp.com/https://3i3v521fj8.execute-api.us-east-1.amazonaws.com/long-term-interest')
//   .then(function (response) {
//     // handle success
//     console.table(response.data);
//     this.setState({
//         mydata : response.data
//     })
//     chart.data =response.data
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })}


    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://3i3v521fj8.execute-api.us-east-1.amazonaws.com/long-term-interest')
  .then(res=> res)
  .then(response=> {
    this.setState({
        data : response.data

    })
    this.extractNodes(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
        // this.extractNodes();
    }

    extractNodes = (datas) => {
        const  data  = datas;
        let categories = {};
        let keywords = {};
        let links = {};
        for (let index = 0; index < data.length; index++) {
            const keyword = data[index].keyword;
            const keywordCategories = data[index].category;
            keywords[keyword] = {};
            links[keyword] = keywordCategories;
            for (let categoryIndex = 0; categoryIndex < keywordCategories.length; categoryIndex++) {
                categories[keywordCategories[categoryIndex]] = {};
            }
        }
        this.setState({ keywords, categories, links }, this.generateCoordinates);
    }

    generateCoordinates = () => {
        const { keywords, categories, links } = this.state;

        const totalKeywords = Object.keys(keywords).length;
        const KeywordBlockTotalSize = totalKeywords * (this.keywordNodeSpacing + this.keywordNodeSize);
        const keywordStartOffset = parseInt((this.stageHeight - KeywordBlockTotalSize) / 2);

        let keywordCount = 0;
        for (let keyword in keywords) {
            let y = keywordStartOffset + parseInt(this.keywordNodeSpacing / 2) + (keywordCount * (parseInt(this.keywordNodeSpacing / 2) + this.keywordNodeSize));
            keywordCount += 1;
            keywords[keyword].x = this.KeywordNodeX;
            keywords[keyword].y = y;
        }

        const totalCategories = Object.keys(categories).length;
        const categoriesBlockTotalSize = totalCategories * (this.categoryNodeSpacing + this.categoryNodeHeight);

        const categoriesStartOffset = parseInt((this.stageHeight - categoriesBlockTotalSize) / 2);

        let categoryCount = 0;
        for (let category in categories) {
            let y = categoriesStartOffset + parseInt(this.categoryNodeSpacing / 2) + (categoryCount * (parseInt(this.categoryNodeSpacing / 2) + this.categoryNodeHeight));
            categoryCount += 1;
            categories[category].x = this.categoryNodeX;
            categories[category].y = y;
        }

        this.setState({ keywords, categories });
    }

    getNodes = () => {
        const { keywords, categories, links } = this.state;
        let nodes = [];

        for (let keywordKey in links) {
            const keywordLink = links[keywordKey];
            const keyword = keywords[keywordKey];
            for (let index in keywordLink) {
                const category = categories[keywordLink[index]];
                nodes.push(
                    <Line
                        points={[keyword.x, keyword.y, category.x, category.y + parseInt(this.categoryNodeHeight / 2)]}
                        tension={500}
                        stroke={(keyword.highlight && category.highlight) ? this.highlightColor : this.lineColor}
                    />
                )
            }
        }


        for (let keyword in keywords) {
            nodes.push(
                <Circle key={keyword + "circle"} x={keywords[keyword].x} y={keywords[keyword].y} radius={10}
                    fill={this.circleFillColor}
                    strokeWidth="3"
                    onMouseOver={e => this.mouseOverEvent(e, 'keyword', keyword)}
                    onMouseOut={e => this.mouseOutEvent(e, 'keyword', keyword)}
                    stroke={(keywords[keyword].highlight) ? this.highlightColor : this.circleFillColor} />
            )
            nodes.push(
                <Text key={keyword + "text"} x={10} y={keywords[keyword].y - 5} text={keyword} fontFamily={this.textFontFamily} />
            )
        }

        for (let category in categories) {
            nodes.push(
                <Rect key={category + "rect"} x={categories[category].x} y={categories[category].y} height={this.categoryNodeHeight}
                    width={this.categoryNodeWidth} cornerRadius={10}
                    fill={this.rectFillColor}
                    onMouseOver={e => this.mouseOverEvent(e, 'category', category)}
                    onMouseOut={e => this.mouseOutEvent(e, 'category', category)}
                    strokeWidth="3"
                    stroke={categories[category].highlight ? this.highlightColor : this.rectFillColor} />
            )
            nodes.push(
                <Text key={category + "text"} x={categories[category].x + 10} y={categories[category].y + 10} text={category} fontFamily={this.textFontFamily} stroke="white" strokeWidth="1" />
            )
        }
        return nodes;
    }

    mouseOverEvent = (event, nodeType, nodeKey) => {
        const container = event.target.getStage().container();
        container.style.cursor = "pointer";

        let { categories, keywords, links } = this.state;
        if (nodeType === "keyword") {
            keywords[nodeKey].highlight = true;
            let categoryKeys = links[nodeKey];

            for (let index in categoryKeys) {
                categories[categoryKeys[index]].highlight = true;
            }
        }

        if (nodeType === "category") {
            categories[nodeKey].highlight = true;

            for (let keyword in links) {
                if (links[keyword].indexOf(nodeKey) > -1) {
                    keywords[keyword].highlight = true;
                }
            }
        }

        this.setState({ categories, keywords });
    }

    mouseOutEvent = (event) => {
        const container = event.target.getStage().container();
        container.style.cursor = "default";

        let { categories, keywords } = this.state;
        for (let category in categories) {
            categories[category].highlight = false;
        }

        for (let keyword in keywords) {
            keywords[keyword].highlight = false;
        }

        this.setState({ categories, keywords });
    }

    render() {
            console.log("DAL+++<>",this.state.data)
        return (
            <div id="conceptMapWrapper">
            {this.state.data.length== 0 ? <strong>Loading...</strong>
            : 
            <Stage width={this.stageWidth} height={this.stageHeight} >
                    <Layer>
                        {this.getNodes()}
                    </Layer>
            </Stage>
            }
                
            </div>
        );
    }
}

export default ConceptMapContainer;