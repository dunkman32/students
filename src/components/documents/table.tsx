import React from "react";
import {format, isValid} from "date-fns";
import {Doc, Doc2, Doc2Info, Document, Span, Span2, Span3, SmallInfoDiv} from "./styles";
import {List, Tag} from 'antd'

enum Status {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
}

interface Row {
    userId: string;
    username: string;
    file: any;
    desc: string;
    createdAt: number;
    month: number;
    status: Status;
}

const formatDate = (d: number) => {
    const date = new Date(d);
    if (isValid(date)) {
        return format(date, "yyyy.MM.dd");
    }
    return "undefined";
};

const TableComponent = ({
                            data,
                            withLink,
                        }: {
    data: Row[];
    withLink?: boolean;
}) => {

    const generateTagColor = (status: Status) => {
        switch (status) {
            case Status.Approved:
                return "#075599";
            case Status.Rejected:
                return "#cb076e";
            default:
                return "#b37feb";
        }
    };

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Doc>
                        <SmallInfoDiv>
                            <Span>{formatDate(item.createdAt)}</Span>
                            <Tag color={generateTagColor(item.status)}>
                                {item.status}
                            </Tag>
                        </SmallInfoDiv>
                        <Document src={item.file} alt={'student'}/>
                    </Doc>
                    <Doc2>
                        <Document src={item.file} alt={'student'}/>
                        <Doc2Info>
                            <Span2>{formatDate(item.createdAt)}</Span2>
                            <Span3>{item.desc}</Span3>
                            <Span3>{monthRenderer(item.month)}</Span3>
                            <Tag style={{maxWidth: 100}} color={generateTagColor(item.status)}>
                                {item.status}
                            </Tag>
                        </Doc2Info>
                    </Doc2>
                </List.Item>
            )}
        />
    );
};

const monthRenderer = (m: number) => {
    switch (m) {
        case 0:
            return 'იანვარი'
        case 1:
            return 'თებერვალი'
        case 2:
            return 'მარტი'
        case 3:
            return 'აპრილი'
        case 4:
            return 'მაისი'
        case 5:
            return 'ივნისი'
        case 6:
            return 'ივლისი'
        case 7:
            return 'აგვისტო'
        case 8:
            return 'სექტემბერი'
        case 9:
            return 'ოქტომბერი'
        case 10:
            return 'ნოემბერი'
        case 11:
            return 'დეკემბერი'
        default:
            return '-'
    }
}
export default TableComponent;
