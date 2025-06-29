export default function Price({oldPrice, newPrice}) {
    let oldstyles={
        textDecorationLine: "line-through",
    }
    let newstyles={
        fontWeight: "bold",
    }
    let styles={
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        width: "200px"
    }
return(
    <div style={styles}>
        <span style={oldstyles}>{oldPrice}</span>
        &nbsp;   &nbsp;   &nbsp;
        <span style={newstyles}>{newPrice}</span>
    </div>
);
}