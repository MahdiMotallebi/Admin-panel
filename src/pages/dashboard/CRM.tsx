//Mui
import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
  Avatar,
  IconButton,
  Button
} from '@mui/material';
import { styled } from '@mui/system';

//icons
import {
  BsBasket3,
  BsChevronUp,
  BsCurrencyDollar,
  BsPhone,
  BsPlayBtn,
  BsSliders,
  BsStackOverflow
} from 'react-icons/bs';

//Components
import { tokens } from '../../theme/themeConfig';
import { CircleChart, SemiDonutChart, TimeLine } from '../../components/charts';
import Layout from '../../components/layout';
import Container from '../../components/common/Container';
import ThreeDotMenu from '../../components/common/ThreeDotMenu';
import Invoice from '../../components/invoice';

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  border: `1px solid ${
    theme.palette.mode === 'light'
      ? theme.palette.border.main
      : theme.palette.border.dark
  }`,
  background: `${theme.palette.background['paper']}`,
  height: '13rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  borderRadius: '1rem'
}));

const CRM = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Layout>
      <Container>
        <Stack gap={2}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
            gap={2}
            sx={{
              [theme.breakpoints.up('lg')]: {
                flexDirection: 'row'
              }
            }}
          >
            <CustomPaper
              sx={{
                position: 'relative',
                width: '100%',
                [theme.breakpoints.up('lg')]: {
                  width: '60%'
                }
              }}
              elevation={0}
            >
              <Box>
                <Box
                  component="img"
                  src="/img/hand.png"
                  alt="winner-img"
                  height={130}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                  }}
                />

                <Typography
                  variant="h5"
                  color={theme.palette.text.primary}
                  textTransform="capitalize"
                >
                  congratulations
                  <Box
                    fontWeight="bold"
                    component="span"
                    display="inline-block"
                    textTransform="capitalize"
                  >
                    norris! 🎉
                  </Box>
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="body2"
                  sx={{
                    '&::first-letter': {
                      textTransform: 'capitalize'
                    }
                  }}
                >
                  best seller of the month
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontSize={24}
                  color={theme.palette.primary['main']}
                >
                  $32.5k
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="body2"
                  textTransform="capitalize"
                >
                  78% of target
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'uppercase',
                  color: `${theme.palette.text.disabled}`,
                  background: `${theme.palette.primary['main']}`,
                  width: 'fit-content',
                  '&:hover': {
                    background: `${colors.info[500]}`
                  }
                }}
              >
                view sales
              </Button>
            </CustomPaper>

            <Box
              component="div"
              display="grid"
              gridTemplateColumns="repeat(2, minmax(10rem, 1fr))"
              gap={2}
              sx={{
                [theme.breakpoints.up('md')]: {
                  gridTemplateColumns: 'repeat(4, minmax(9rem, 1fr))'
                },
                width: '100%'
              }}
            >
              <CustomPaper elevation={0}>
                <Box component="div">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                  >
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      $43.5k
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={14}
                      color={colors.error[500]}
                    >
                      -83%
                    </Typography>
                  </Stack>
                  <Typography
                    color={theme.palette.text.secondary}
                    variant="body2"
                    textTransform="capitalize"
                  >
                    total sizes
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <CircleChart />
                </Box>
              </CustomPaper>

              <CustomPaper elevation={0}>
                <Box component="div">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                  >
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      $27.5k
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={14}
                      color={colors.success[500]}
                    >
                      +16%
                    </Typography>
                  </Stack>
                  <Typography
                    color={theme.palette.text.secondary}
                    variant="body2"
                    textTransform="capitalize"
                  >
                    total growth
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <CircleChart />
                </Box>
              </CustomPaper>

              <CustomPaper elevation={0}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                  gap={2}
                >
                  <Avatar
                    sx={{
                      background: `${
                        theme.palette.mode === 'light'
                          ? colors.info[900]
                          : colors.info[700]
                      }`,
                      borderRadius: '.4rem'
                    }}
                    variant="square"
                  >
                    <BsBasket3 color={colors.info[300]} />
                  </Avatar>
                  <Box display="flex" alignItems="center">
                    <Typography
                      color={colors.success[500]}
                      variant="h6"
                      fontSize={14}
                    >
                      22%
                    </Typography>
                    <IconButton disableRipple sx={{ cursor: 'default' }}>
                      <BsChevronUp
                        color={colors.success[500]}
                        fontSize={14}
                        fontWeight="bold"
                      />
                    </IconButton>
                  </Box>
                </Stack>
                <Box component="div">
                  <Typography variant="h6" color={theme.palette.text.primary}>
                    $27.5k
                  </Typography>
                  <Typography
                    color={theme.palette.text.secondary}
                    variant="body2"
                    textTransform="capitalize"
                  >
                    total orders
                  </Typography>
                </Box>
                <Chip
                  label="last 4 month"
                  sx={{ color: `${colors.grey[300]}`, width: 'fit-content' }}
                  size="small"
                />
              </CustomPaper>

              <CustomPaper elevation={0}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                  gap={2}
                >
                  <Avatar
                    sx={{
                      background: `${
                        theme.palette.mode === 'light'
                          ? colors.success[900]
                          : colors.success[700]
                      }`,

                      borderRadius: '.4rem'
                    }}
                    variant="square"
                  >
                    <BsCurrencyDollar color={colors.success[500]} />
                  </Avatar>
                  <Box display="flex" alignItems="center">
                    <Typography
                      color={colors.success[500]}
                      variant="h6"
                      fontSize={14}
                    >
                      +38%
                    </Typography>
                    <IconButton disableRipple sx={{ cursor: 'default' }}>
                      <BsChevronUp
                        color={colors.success[500]}
                        fontSize={14}
                        fontWeight="bold"
                      />
                    </IconButton>
                  </Box>
                </Stack>
                <Box component="div">
                  <Typography variant="h6" color={theme.palette.text.primary}>
                    $311k
                  </Typography>
                  <Typography
                    color={theme.palette.text.secondary}
                    variant="body2"
                    textTransform="capitalize"
                  >
                    total sales
                  </Typography>
                </Box>
                <Chip
                  label="last six month"
                  sx={{ color: `${colors.grey[300]}`, width: 'fit-content' }}
                  size="small"
                />
              </CustomPaper>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            gap={2}
            sx={{
              [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                height: '23rem'
              }
            }}
          >
            <CustomPaper
              elevation={0}
              sx={{
                height: '100%',
                width: '100%',

                [theme.breakpoints.up('lg')]: {
                  width: '40%'
                },
                '& .apexcharts-legend': {
                  gap: '.5rem 2rem',
                  fontFamily: 'Titillium web'
                },

                '& .apexcharts-legend-text': {
                  textTransform: 'uppercase',
                  color: `${theme.palette.text.secondary} !important`
                },
                '& .apexcharts-datalabel-label': {
                  textTransform: 'capitalize'
                }
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  textTransform="capitalize"
                  fontWeight="bold"
                  letterSpacing=".5px"
                  color={theme.palette.text.primary}
                >
                  organic sessions
                </Typography>
                <ThreeDotMenu />
              </Box>
              <SemiDonutChart />
            </CustomPaper>

            <CustomPaper
              sx={{
                position: 'relative',
                flexDirection: 'column',
                height: '100%',
                width: '100%',

                gap: '1.5rem',
                [theme.breakpoints.up('md')]: {
                  flexDirection: 'row'
                }
              }}
              elevation={0}
            >
              <Box
                width="100%"
                sx={{
                  '& .apexcharts-data-labels': {
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItmes: ' center',
                    justifyContent: 'center'
                  },
                  '& .apexcharts-yaxis-label': {
                    textAnchor: 'start'
                  }
                }}
              >
                <Typography
                  textTransform="capitalize"
                  color={theme.palette.text.primary}
                  fontWeight="bold"
                  letterSpacing=".5px"
                >
                  project timeline
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant="body2"
                  textTransform="capitalize"
                >
                  total 740 task complete
                </Typography>
                <TimeLine />
              </Box>
              <Box
                width="100%"
                sx={{
                  borderTop: `1px solid ${theme.palette.border.main}`,
                  paddingTop: '1.5rem',
                  [theme.breakpoints.up('md')]: {
                    borderTop: 'none',
                    paddingTop: '0',
                    paddingLeft: '1.5rem',
                    width: '50%',
                    borderLeft: `1px solid ${theme.palette.border.main}`
                  }
                }}
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <Box
                  display="flex"
                  alignItems="start"
                  justifyContent="space-between"
                >
                  <Stack>
                    <Typography
                      textTransform="capitalize"
                      color={theme.palette.text.primary}
                      fontWeight="bold"
                      letterSpacing=".5px"
                    >
                      project list
                    </Typography>
                    <Typography
                      color={theme.palette.text.secondary}
                      variant="body2"
                      textTransform="capitalize"
                    >
                      4 ongoing projects
                    </Typography>
                  </Stack>
                  <ThreeDotMenu />
                </Box>
                <Stack gap={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          background: `${
                            theme.palette.mode === 'light'
                              ? colors.info[900]
                              : colors.info[700]
                          }`,
                          borderRadius: '.4rem'
                        }}
                        variant="square"
                      >
                        <BsPhone color={colors.info[300]} />
                      </Avatar>
                    </Box>
                    <Stack width="100%">
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                        fontWeight="bold"
                        letterSpacing=".5px"
                      >
                        ios application
                      </Typography>
                      <Typography
                        color={theme.palette.text.secondary}
                        variant="body2"
                        textTransform="capitalize"
                      >
                        task 840/2.5k
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          background: `${
                            theme.palette.mode === 'light'
                              ? colors.success[900]
                              : colors.success[700]
                          }`,
                          borderRadius: '.4rem'
                        }}
                        variant="square"
                      >
                        <BsSliders color={colors.success[500]} />
                      </Avatar>
                    </Box>
                    <Stack width="100%">
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                        fontWeight="bold"
                        letterSpacing=".5px"
                      >
                        web application
                      </Typography>
                      <Typography
                        color={theme.palette.text.secondary}
                        variant="body2"
                        textTransform="capitalize"
                      >
                        task 40/1.5k
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          background: `${
                            theme.palette.mode === 'light'
                              ? colors.grey[400]
                              : colors.grey[700]
                          }`,
                          borderRadius: '.4rem'
                        }}
                        variant="square"
                      >
                        <BsPlayBtn color={colors.grey[500]} />
                      </Avatar>
                    </Box>
                    <Stack width="100%">
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                        fontWeight="bold"
                        letterSpacing=".5px"
                      >
                        bank dashboard
                      </Typography>
                      <Typography
                        color={theme.palette.text.secondary}
                        variant="body2"
                        textTransform="capitalize"
                      >
                        task 400/500
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          background: `${
                            theme.palette.mode === 'light'
                              ? colors.error[900]
                              : colors.error[300]
                          }`,
                          borderRadius: '.4rem'
                        }}
                        variant="square"
                      >
                        <BsStackOverflow color={colors.error[500]} />
                      </Avatar>
                    </Box>
                    <Stack width="100%">
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                        fontWeight="bold"
                        letterSpacing=".5px"
                      >
                        ui kit design
                      </Typography>
                      <Typography
                        color={theme.palette.text.secondary}
                        variant="body2"
                        textTransform="capitalize"
                      >
                        task 12/12.1k
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </CustomPaper>
          </Box>
          <Box>
            <Invoice />
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default CRM;
