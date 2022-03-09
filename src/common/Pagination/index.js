import { useReplaceQueryParameter } from '../useReplaceQueryParameter';
import { useAPIPages } from './useAPIPages';
import { paginationQueryParamName } from '../queryParamNames';
import { PaginationArrow } from './PaginationArrow';
import {
  Caption,
  CaptionsWrapper,
  ButtonText,
  PaginationList,
  PaginationButton,
  Wrapper,
  ButtonContentWrapper,
} from './styled';

export const Pagination = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const [currentPage, totalPages] = useAPIPages();
  const maxTotalPages = totalPages > 500 ? 500 : totalPages;

  return (
    <Wrapper>
      <PaginationList>
        <li>
          <PaginationButton
            aria-label="first page"
            disabled={currentPage === 1}
            onClick={() =>
              replaceQueryParameter({
                key: paginationQueryParamName,
                value: 1,
              })
            }
          >
            <ButtonContentWrapper>
              <PaginationArrow disabled={currentPage === 1} />
              <PaginationArrow extra disabled={currentPage === 1} />
              <ButtonText>First</ButtonText>
            </ButtonContentWrapper>
          </PaginationButton>
        </li>
        <li>
          <PaginationButton
            aria-label="previous page"
            disabled={currentPage === 1}
            onClick={() =>
              replaceQueryParameter({
                key: paginationQueryParamName,
                value: currentPage - 1,
              })
            }
          >
            <ButtonContentWrapper smallStep>
              <PaginationArrow disabled={currentPage === 1} />
              <ButtonText>Previous</ButtonText>
            </ButtonContentWrapper>
          </PaginationButton>
        </li>
      </PaginationList>
      <CaptionsWrapper>
        <Caption>Page</Caption>
        <Caption semibold>{currentPage}</Caption>
        <Caption>of</Caption>
        <Caption semibold>{maxTotalPages}</Caption>
      </CaptionsWrapper>
      <PaginationList>
        <li>
          <PaginationButton
            aria-label="next page"
            disabled={currentPage === maxTotalPages}
            onClick={() =>
              replaceQueryParameter({
                key: paginationQueryParamName,
                value: currentPage + 1,
              })
            }
          >
            <ButtonContentWrapper smallStep>
              <ButtonText>Next</ButtonText>
              <PaginationArrow
                forward
                disabled={currentPage === maxTotalPages}
              />
            </ButtonContentWrapper>
          </PaginationButton>
        </li>
        <li>
          <PaginationButton
            aria-label="last page"
            disabled={currentPage === maxTotalPages}
            onClick={() =>
              replaceQueryParameter({
                key: paginationQueryParamName,
                value: maxTotalPages,
              })
            }
          >
            <ButtonContentWrapper>
              <ButtonText>Last</ButtonText>
              <PaginationArrow
                forward
                disabled={currentPage === maxTotalPages}
              />
              <PaginationArrow
                extra
                forward
                disabled={currentPage === maxTotalPages}
              />
            </ButtonContentWrapper>
          </PaginationButton>
        </li>
      </PaginationList>
    </Wrapper>
  );
};
