import React, { useEffect } from 'react';
import { useRandonUserApi } from '../../../../contexts/MockRandomUserApi';
import { Container } from './styles';
import { StyledTable } from '../../../../components/shared/Table/styles';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Cel',
    dataIndex: 'cell',
  },
  {
    title: 'Nat',
    dataIndex: 'nat',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];

const PanelTable = () => {
  const {
    data,
    loading,
    pagination,
    generateRandomUserData,
    params,
    setParams,
  } = useRandonUserApi();

  const handleTableChange = (pagination, filters, sorter) => {
    setParams({
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...pagination,
      ...filters,
      results: 200,
    });
  };

  useEffect(() => {
    generateRandomUserData();
  }, [params]);

  useEffect(() => {
    generateRandomUserData();
  }, []);

  return (
    <Container>
      <StyledTable
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={handleTableChange}
        loading={loading}
        getPopupContainer={(trigger: any) => trigger.parentElement}
      />
    </Container>
  );
};

export default PanelTable;
