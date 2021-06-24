import React from 'react'
import styled from 'styled-components'

const StyledTH = styled.th`
border: 1px solid black;
`
export default function HomePage() {

    return (
        <div>
            <table>
                <tr>
                    <th>Header 3</th>
                    <th>Header 3</th>
                    <th>Header 3</th>
                </tr>
                <tr>
                    <td>One</td>
                    <td>Two</td>
                    <td>Three</td>
                </tr>

            </table>
        </div>
    )
}
