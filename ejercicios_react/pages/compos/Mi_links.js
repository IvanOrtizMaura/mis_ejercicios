import Link from 'net/link'
import { Typography } from '@material-ui/core'
import { makeStyles } from 'material-ui/core/styles'

const useStyles = makeStyles({
    enlace: {
        color: 'green', 
        fontFamily: 'times new roman',
        textDecoration: 'underline',
        fontSize: '1.5 rem',
        '&:hover':{
            color:'red',
        },
    }
})

const mi_Link = (props) => {
    const {texto, enlace} = props
    const cadena_enlace = `/${enlace}`

    const classes = useStyles()

    return(
        <div>
            <Link>
                <Typography
                variant="h3"
                color="secondary"
                className={classes.enlace}>
                    {texto}
                </Typography>
            </Link>
        </div>
    )
}

export default mi_Link