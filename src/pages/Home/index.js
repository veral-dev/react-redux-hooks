import React, { useState } from 'react'
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie';

import styles from './style'

export default ({ history }) => {
	const classes = styles()
	const [searchText, setSearchText] = useState('')
	const handleSearchText = e => {
		setSearchText(e.target.value)
	}
	const handleSearchClick = e => {
		history.push(`/results?movieName=${searchText}`)
	}
	const handleCleanText = e => {
		setSearchText('')
	}

	return (

		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container>
					<Grid className={classes.titleGridContainer}>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField className={classes.textFieldSearch} value={searchText} placeholder="Buscar" onChange={handleSearchText}>

				</TextField>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleCleanText}>Limpiar</Button>
					<Button variant="contained" color="primary" onClick={handleSearchClick}>Buscar</Button>
				</Grid>
			</Card>


		</Container>
	)
}