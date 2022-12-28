import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Total}</th>
            <th>{individualExcelData.Females}</th>
            <th>{individualExcelData.Males}</th>
            <th>{individualExcelData.Paid}</th>
            <th>{individualExcelData.Amount}</th>
        </>
    )
}