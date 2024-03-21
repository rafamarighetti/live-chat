import React, {useEffect, useState} from 'react';
import {
  Alert, Avatar,
  Button,
  Chip,
  Grid,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import {Box} from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import UserCard from "../userCard/userCard";
import {Users} from "../../../../types/interfaces";
import createGroupChatStyles from './tabChat.style'
import {api} from "../../../../interceptor";
import {logOut} from "../../../../helpers/logOut";
import {useRouter} from "next/router";
import GroupCard from "../groupCard/groupCard";
import {GroupList, UserCardProps} from '../interfaces'
import {stringAvatar} from "../../../../helpers/createAvatar";
import useDebounce from "../../../../helpers/useDebounce";

const TabChat = ({value, allUsers, allGroups}: any) => {
  const router = useRouter();
  const classes = createGroupChatStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [openError, setOpenError] = useState<boolean>(false)

  const [groupName, setGroupName] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<UserCardProps[]>([]);
  const [usersList, setUsersList] = useState<UserCardProps[]>([]);
  const [groupList, setGroupList] = useState<GroupList[]>([]);

  useEffect((): void => {
    if (allUsers && allGroups) {
      setUsersList(allUsers)
      setGroupList(allGroups)
    }
  }, [allUsers, allGroups])
  const searchUserByName = useDebounce(async (name: string): Promise<void> => {
    try {
      const response = await api.post('http://localhost:5001/users/searchedUser', {
        userName: name,
        currentUserId: localStorage.getItem('userId'),
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setUsersList(response.data)
    } catch (e) {
      logOut(router)
    }
  }, 500)

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const errorOpen = (): void => setOpenError(true);
  const errorClose = (): void => setOpenError(false);

  const handleDelete = (user: UserCardProps): void => {
    setSelectedUsers(selectedUsers?.filter((userId: any) => userId.id !== user.id ))
    setUsersList((prev: any) => [...prev, user])
  };

  const handleAdd = async () => {
    if (groupName != '' && selectedUsers?.length >= 2) {
      const users = selectedUsers?.map((item: any) => {
        return item.id
      })
      try {
        const response = await api.post('http://localhost:5001/rooms/createGroupChat', {
          usersId: [localStorage.getItem('userId'), ...users],
          name: groupName,
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setGroupList((prev: any) => [...prev, response.data])
        setGroupName('')
        setSelectedUsers([])
        setUsersList(allUsers)
        setOpen(false)
      } catch (e) {
        logOut(router)
      }

    } else {
      errorOpen()
    }
  };

  const addUserToList = (user: UserCardProps): void => {
    setSelectedUsers((prev: any) => [...prev, user])
    setUsersList(usersList.filter((usId: any) => usId.id !== user.id ))
  }

  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      className={classes.blockPages}
    >
      {
        value === 0
        ? <Grid
          item
          className={classes.firstPage}
        >
          <Grid mb={2}>
            <TextField
              color="secondary"
              label="Encontrar pessoas..."
              placeholder="Digite sua pesquisa"
              variant="outlined"
              type="text"
              onChange={(e) => searchUserByName(e.target.value)}
              fullWidth
              autoComplete='off'
            />
          </Grid>
          {
            usersList?.length != 0
              ? usersList?.map((item: UserCardProps) => {
                return(
                  <UserCard name={item.name} surname={item.surname} id={item.id} color={item.color} key={item.id}/>
                )
              })
              : <p>Nenhum usuário encontrado</p>
          }
        </Grid>
        : <Grid
            item
            className={classes.secondPage}
          >
            <Grid mb={2}>
              <Button color="secondary" onClick={handleOpen} variant='outlined' fullWidth>Criar uma Sala de Bate Papo</Button>
            </Grid>
            {
              groupList?.length != 0
              ? groupList?.map((item: GroupList) => {
                return(
                  <GroupCard name={item?.name} id={item?.id} key={item?.id} />
                )
              })
              : <p style={{textAlign: 'center'}}>Você não tem nenhuma conexão. <br/> Convide seus amigos!</p>
            }
          </Grid>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box} sx={{backgroundColor: 'background.paper', borderRadius: '5px'}}>
          <Grid
            container
            justifyContent='center'
            mb={0}
            width='100%'
          >
            <Grid
              container
              justifyContent='flex-end'
              onClick={() => setOpen(false)}
              className={classes.close}
            >
              <CloseIcon />
            </Grid>
            <Grid
              container
              width='100%'
              className={classes.createGroupChat}
            >
              <form className={classes.form} onSubmit={(event => event.preventDefault())}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2" mb={2}>
                  Criar nova sala
                </Typography>
                <Grid
                  container
                  width='100%'
                  flexDirection='column'
                  alignItems='center'
                >
                  <Grid item width='80%'>
                    <TextField
                      label="Nome da Sala"
                      placeholder="Insira o nome da sala"
                      variant="outlined"
                      type="name"
                      name="name"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                      required
                      fullWidth
                      autoComplete='off'
                    />
                  </Grid>
                  <Grid item width='80%'>
                    <Grid
                      container
                      mt={2}
                      width='100%'
                      className={classes.checkedUsers}
                    >
                      <Stack direction="row" spacing={1}>
                        {
                          selectedUsers.length != 0
                          ? selectedUsers?.map((item: any) => {
                              return(
                                <Chip
                                  label={item.name}
                                  variant="outlined"
                                  color='secondary'
                                  onDelete={() => handleDelete(item)}
                                  key={item.id}
                                />
                              )
                            })
                          : <span>Adicionar usuários na sala</span>
                        }
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid item width='90%'>
                    <Grid
                      container
                      flexDirection='column'
                      alignItems='center'
                      mt={2}
                      width='100%'
                      className={classes.userList}
                    >
                      <Grid
                        container
                        justifyContent='center'
                        width='100%'
                        pt={1}
                      >
                        <Grid
                          width='90%'
                        >
                          <TextField
                            color="secondary"
                            label="Encontrar pessoas"
                            placeholder="Insira sua pesquisa..."
                            variant="outlined"
                            type="text"
                            // value={searchedUser}
                            onChange={(e) => searchUserByName(e.target.value)}
                            required
                            autoComplete='off'
                            fullWidth
                          />
                        </Grid>
                        {
                          usersList?.map((item: any) => {
                            return (
                              <Grid
                                container
                                width='90%'
                                key={item.id}
                                className={classes.userCard}
                                flexWrap='nowrap'
                                alignItems='center'
                                justifyContent='left'
                                mt={2}
                              >
                                <Grid pl={2}>
                                  <Avatar {...stringAvatar(item.name, item.surname, item.color)} />
                                </Grid>
                                <Grid
                                  container
                                  ml={2}
                                  width='150px'
                                  justifyContent='flex-start'
                                  sx={{overflow: 'hidden', textAlign: 'left'}}
                                >
                                  {item.name} {item.surname}
                                </Grid>
                                <Grid pl={2} >
                                  <AddCircleOutlineIcon
                                    className={classes.addUser}
                                    fontSize='medium'
                                    onClick={() => {
                                      addUserToList(item)
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Grid>
                    <Grid
                      mt={3}
                      width='100%'
                    >
                      <Button
                        color="secondary"
                        variant='contained'
                        onClick={handleAdd}
                      >
                        Criar sala de Bate Papo
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Snackbar open={openError} autoHideDuration={3000} onClose={errorClose}>
                  <Alert onClose={errorClose} severity="error" sx={{ width: '90%' }}>
                    Insira o nome da sala e os usuários
                  </Alert>
                </Snackbar>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default TabChat;